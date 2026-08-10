FROM node:22-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-slim AS builder
WORKDIR /app
ARG NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
ARG NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
ENV NODE_ENV=production
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
RUN addgroup --gid 10001 app \
    && adduser --uid 10001 --gid 10001 --disabled-password --gecos "" --no-create-home app
COPY --from=builder --chown=app:app /app/package*.json ./
COPY --from=builder --chown=app:app /app/node_modules ./node_modules
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/public ./public
USER 10001:10001
EXPOSE 3002
CMD ["npm", "run", "start", "--", "-p", "3002", "-H", "0.0.0.0"]
