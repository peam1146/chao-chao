FROM node:21-alpine3.18 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN pnpm install -g turbo
COPY . .
RUN turbo prune store-web --docker

FROM base AS runner
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=store-web
# RUN pnpm turbo run build --filter=store-web
CMD [ "pnpm", "turbo", "run", "start", "--filter=store-web" ]
