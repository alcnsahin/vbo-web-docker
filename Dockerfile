FROM node:15.4.0-alpine3.10

RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
USER 1000
ENV NODE_ENV=test
EXPOSE 9999
CMD [ "node", "main.js" ]