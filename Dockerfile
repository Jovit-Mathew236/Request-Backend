# Dockerfile

FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN pnpm install

COPY . .

RUN npx prisma generate

RUN pnpm run build

USER node

CMD ["pnpm", "run", "start:prod"]
