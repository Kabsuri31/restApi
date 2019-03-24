FROM node:8.11.1

# install dependencies
WORKDIR /usr/src/nodejs-api
COPY package.json package-lock.json* ./
RUN npm install

#copy code to container repo
COPY . /usr/src/nodejs-api

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
EXPOSE 3000

CMD [ "npm", "start" ]