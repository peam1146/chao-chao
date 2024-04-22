FROM node:21-alpine3.18 AS base
ARG NEXT_PUBLIC_API_URL

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
ARG NEXT_PUBLIC_API_URL

WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN pnpm install -g turbo
COPY . .
RUN turbo prune store-web --docker

FROM base AS runner
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
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

FROM base AS final
WORKDIR /app
COPY --from=runner /app/apps/store-web/.next .
COPY --from=runner /app/apps/store-web/.next/static ./standalone/apps/store-web/.next/static

ENV HOSTNAME 0.0.0.0
CMD [ "node", "./standalone/apps/store-web/server.js" ]