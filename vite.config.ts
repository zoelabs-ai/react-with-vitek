import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { vitek } from 'vitek-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const appEnv = env.APP_ENV ?? 'local'
  const appPort = env.PORT ? Number(env.PORT) : 3333

  return {
    plugins: [
      react(),
      vitek({
        alias: { '@': 'src' },
        openApi: {
          info: { title: 'App API', version: '1.0.0', description: '' },
        },
        logging: {
          level: 'info',
          enableRequestLogging: true,
          enableRouteLogging: true,
        },
      }),
    ],
    server: { host: true, port: appPort },
    build: {
      commonjsOptions: { transformMixedEsModules: true },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) return 'react-vendor'
              if (id.includes('react-router')) return 'router'
              if (id.includes('axios')) return 'axios'
              if (id.includes('@chakra-ui')) return 'chakra'
              return 'vendor'
            }
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
    define: {
      'import.meta.env.VITE_APP_ENV': JSON.stringify(appEnv),
      'import.meta.env.VITE_PORT': JSON.stringify(appPort),
    },
  }
})
