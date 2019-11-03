FROM node:8.11.1

# install dependencies
WORKDIR /usr/src/nodejs-api
COPY package.json package-lock.json* ./
RUN npm install

#copy code to container repo
COPY . /usr/src/nodejs-api

# application port
EXPOSE 3000

#HELLO 

CMD [ "npm", "start" ]