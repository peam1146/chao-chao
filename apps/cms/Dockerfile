FROM node:21 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /app
RUN pnpm install -g turbo
COPY . .
RUN turbo prune cms --docker

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=cms
# RUN pnpm turbo run build --filter=store-web
CMD [ "pnpm", "turbo", "run", "start", "--filter=cms" ]
