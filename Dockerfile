FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY *.js .
COPY *.gif .

EXPOSE 8080
CMD [ "npm", "start" ]