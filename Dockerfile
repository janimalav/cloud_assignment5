FROM node:12.18-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 1337
CMD npm start