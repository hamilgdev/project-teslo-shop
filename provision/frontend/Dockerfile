ARG NODE_VERSION=18.17.0

# install dependencies
FROM node:${NODE_VERSION}-alpine AS compile-image

# Set working directory
ENV APP_HOME /usr/src
WORKDIR $APP_HOME
COPY ./package.json ./package-lock.json ./tsconfig.json $APP_HOME/
RUN npm install

FROM node:${NODE_VERSION}-alpine AS runtime-image

ENV APP_HOME /home/app
WORKDIR $APP_HOME
COPY --from=compile-image /usr/src/node_modules $APP_HOME/node_modules
RUN npm install -g npm@10.2.1
COPY . $APP_HOME

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
