FROM node:carbon as builder

WORKDIR /app

ADD . .

ENV NODE_ENV production

RUN npm install

RUN npm run build

RUN npm run export

FROM nginx:1.17.5-alpine

COPY --from=builder /app/out/ /usr/share/nginx/html/

