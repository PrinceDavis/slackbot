FROM node:16.13.1
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000
CMD ["/bin/sh", "entrypoint.sh"]