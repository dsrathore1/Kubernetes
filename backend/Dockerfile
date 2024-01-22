FROM node:20-alpine3.19

WORKDIR /app/backend

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm","run", "start" ]