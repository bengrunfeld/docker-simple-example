FROM node:12.18.3

WORKDIR /usr/src/app

ENV MESSAGE "Hello from Ben"

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm", "start"]