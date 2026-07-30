FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache curl wget
RUN corepack enable

COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=1001

EXPOSE 1001

CMD ["pnpm", "start"]