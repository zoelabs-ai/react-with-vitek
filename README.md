# react-with-vitek

zoelabs-ai full-stack project template.
React + TypeScript + Vite + vitek-plugin + Prisma + PostgreSQL + Chakra UI 3.

## Use this template

```bash
gh repo create my-project --template zoelabs-ai/react-with-vitek --clone
cd my-project
cp .env.example .env
pnpm dev
```

## Local development

Prerequisites: Docker, pnpm

```
pnpm dev     # starts postgres + app via Docker Compose
```

App runs at http://localhost:3333

## Stack

* React 19 + Vite 6
* vitek-plugin — file-based API routing
* Prisma 7 + PostgreSQL
* Chakra UI 3
* Jotai + TanStack Query 5

## Docs

* [Architecture](docs/ARCHITECTURE.md)
* [Design System](docs/DESIGN-SYSTEM.md)
* [Color Palette](docs/COLOR-PALETTE.md)
* [Cache Policy](docs/CACHE-POLICY.md)
