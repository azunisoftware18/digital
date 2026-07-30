FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

ENV NODE_ENV=production
ENV PORT=1001

EXPOSE 1001

CMD ["serve", "-s", "dist", "-l", "1001"]