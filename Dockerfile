FROM node:erbium as builder

WORKDIR /app


ENV NODE_ENV production

RUN npm install -g yarn

ADD package.json . 

ADD yarn.lock . 

RUN yarn install

ADD . .

RUN yarn build

RUN yarn export

FROM nginx:1.17.5-alpine

ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/out/ /usr/share/nginx/html/

