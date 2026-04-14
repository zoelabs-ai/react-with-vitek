# react-with-vitek

Full-stack TypeScript template: React + Vite + vitek-plugin + Prisma +
PostgreSQL + Chakra UI 3 + Jotai + Docker.

## Stack

- Frontend: React 19 + Vite 6.4
- API: vitek-plugin (file-based routing, src/api/)
- Database: Prisma 7 + PostgreSQL
- UI: Chakra UI 3
- State: Jotai + TanStack Query 5
- Testing: Vitest 4

## Folder structure

- src/api/       — route handlers (filename = route + method)
- src/app/       — App.tsx providers + router.tsx
- src/config/    — all server config (never read process.env elsewhere)
- src/features/  — feature modules (never import between features)
- src/lib/       — db.ts singleton + typed API wrappers
- src/shared/    — reusable components, hooks, stores, theme
- src/utils/     — server-side utilities (auth, logger, error-handler)

## Hard rules

- Never read process.env outside src/config/constants.ts
- Never import between feature modules — use src/shared/
- Never use raw hex colors — use Chakra tokens from src/shared/theme/
- Never recreate a component in docs/DESIGN-SYSTEM.md
- Never use console.* in server code — use src/utils/logger.ts
- Always check .claudeignore before reading any file
- Never rewrite a file when a targeted edit will do
- Never commit with --no-verify

## Dev commands

pnpm dev              # start with Docker (postgres + app)
pnpm build            # tsc + vite build (prisma generate runs first)
pnpm test             # run tests
pnpm db:migrate       # create and run a new migration
pnpm db:seed          # seed the database
pnpm docs:dev         # start VitePress docs
