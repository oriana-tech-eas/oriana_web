FROM node:23-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Production image
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create system user for running the app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set proper ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]