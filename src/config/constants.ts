export const is = {
  build: {
    dev: process.env.NODE_ENV === 'development',
    prod: process.env.NODE_ENV === 'production',
  },
  env: {
    local: process.env.APP_ENV === 'local',
    stage: process.env.APP_ENV === 'stage',
    prod: process.env.APP_ENV === 'production',
  },
}

export const server = {
  auth: {
    cookieName: process.env.AUTH_COOKIE_NAME ?? 'auth_token',
    cookieMaxAge: Number(process.env.AUTH_COOKIE_MAX_AGE ?? 604800),
    saltRounds: 12,
    jwtSecret: process.env.JWT_SECRET ?? '',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  },
  frontend: {
    url: process.env.FRONTEND_URL ?? 'http://localhost:3333',
  },
  cors: {
    allowOrigins: (process.env.CORS_ALLOW_ORIGINS ?? '').split(','),
    allowMethods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowHeaders: 'Content-Type,Authorization',
  },
  rateLimit: {
    max: Number(process.env.RATE_LIMIT_MAX ?? 100),
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS ?? 900000),
  },
}
