#! Main base image
FROM node:20-alpine3.19 as builder

WORKDIR /app/frontend

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

#! Web Server image 

FROM nginx:alpine3.18 as webserver

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/frontend/build .

CMD [ "nginx", "-g", "daemon off;" ]
