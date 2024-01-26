FROM node:18

ADD . /app
WORKDIR /app

RUN npm i --omit=dev

EXPOSE 9002
CMD npm run start