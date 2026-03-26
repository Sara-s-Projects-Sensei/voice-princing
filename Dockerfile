# ─── Stage 1: Build Next.js ────────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ─── Stage 2: Production runtime ───────────────────────────────────────────────
FROM node:22-alpine
WORKDIR /app

RUN addgroup -S -g 1001 nextjs && adduser -S -u 1001 -G nextjs nextjs

COPY --from=build --chown=nextjs:nextjs /app/.next ./.next
COPY --from=build --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=build --chown=nextjs:nextjs /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start", "--", "-p", "3000"]
