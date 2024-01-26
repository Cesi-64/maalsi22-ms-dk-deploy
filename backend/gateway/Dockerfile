FROM node:18

ADD . /app
WORKDIR /app

RUN npm i --omit=dev

EXPOSE 12000
CMD npm run start