FROM node:21-alpine3.17

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json ./

USER root
RUN npm install
COPY . .

EXPOSE 3000 

CMD ["npm", "start"]