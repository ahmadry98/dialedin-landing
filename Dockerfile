FROM node:22-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-slim AS builder
WORKDIR /app
ARG NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
ARG SUPABASE_SERVICE_ROLE_KEY=local-placeholder-key
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
ARG NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
ARG SUPABASE_SERVICE_ROLE_KEY=local-placeholder-key
ENV NODE_ENV=production
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3002
CMD ["npm", "run", "start", "--", "-p", "3002", "-H", "0.0.0.0"]
