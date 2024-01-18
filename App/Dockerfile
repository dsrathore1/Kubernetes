FROM node:20-alpine3.19

WORKDIR /k8s/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]