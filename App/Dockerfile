FROM node:21.6.0

WORKDIR /k8s/app

COPY package.json .

RUN npm run install

COPY . .

EXPOSE ${PORT}

CMD [ "nodemon", "index.js" ]