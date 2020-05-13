FROM node:12.14.1-alpine3.10

COPY ./dist/** /home/node/app/

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@6.14.2

WORKDIR /home/node/app