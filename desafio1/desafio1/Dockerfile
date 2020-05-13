FROM node:12.14.1-alpine3.10

COPY ./package.json /home/node/app/package.json

RUN npm install

COPY * /home/node/app/

WORKDIR /home/node/app

CMD ["node", "server.js"]