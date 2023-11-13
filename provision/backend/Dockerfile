ARG NODE_VERSION=18.17.0

# install dependencies
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
ENV APP_HOME /var/www/tesloshop
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# Copiar el directorio y su contenido
COPY . .
COPY package.json tsconfig.json tsconfig.build.json ./
RUN npm install

# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password nestjs
RUN chown -R nestjs:nestjs $APP_HOME
USER nestjs

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
