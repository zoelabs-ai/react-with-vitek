FROM node:24-alpine
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --ignore-scripts
COPY . .
ARG PORT=3333
ARG DATABASE_URL
ENV PORT=${PORT}
ENV DATABASE_URL=${DATABASE_URL}
RUN pnpm db:generate
EXPOSE ${PORT}
CMD ["sh", "-c", "pnpm db:migrate:deploy && pnpm db:seed && pnpm vite"]
