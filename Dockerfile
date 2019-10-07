FROM node:carbon as builder

WORKDIR /app

ADD . .

ENV NODE_ENV production

RUN npm install

RUN npm run build

FROM nginx:1.17.3-alpine

COPY --from=builder /app/.next/server/static/deploy/pages/* /usr/share/nginx/html/

