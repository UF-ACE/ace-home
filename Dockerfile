FROM node:erbium as builder

WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

ADD package.json . 
ADD yarn.lock . 
RUN yarn install

ADD . .
RUN yarn build
RUN yarn export
RUN mv .postcss.config.js postcss.config.js
RUN rm -rf .next/
RUN yarn build
RUN rm -rf out/
RUN yarn export

FROM nginx:1.17-alpine

COPY --from=builder /app/out/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/nginx.conf
