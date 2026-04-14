# Architecture

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 6 |
| API routing | vitek-plugin (file-based) |
| Database | PostgreSQL + Prisma 7 |
| UI | Chakra UI 3 |
| State | Jotai + TanStack Query |

## Folder ownership

- `src/api/` — route handlers only, no business logic
- `src/features/` — feature modules, never import from each other
- `src/shared/` — everything reusable across features
- `src/utils/` — server-side only utilities
- `src/lib/` — typed HTTP wrappers and db singleton

## API route convention

File name determines route and method:
- `src/api/health.get.ts` → GET /api/health
- `src/api/users/[id].get.ts` → GET /api/users/:id
