FROM node:erbium as builder

WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g yarn
ADD package.json . 
ADD yarn.lock . 
RUN yarn install

ADD . .
RUN yarn build
RUN yarn export

FROM nginx:1.17-alpine

COPY --from=builder /app/out/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/nginx.conf
