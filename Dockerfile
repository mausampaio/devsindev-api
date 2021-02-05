FROM node:lts-alpine

ENV HOME=/app
WORKDIR $HOME

RUN npm install sails -g

COPY package.json ./
RUN npm install

COPY . /app

EXPOSE 1337

CMD sails lift