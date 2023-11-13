# TESLO SHOP APP

A simple e-commerce app built with Nextjs, React, Nestjs, Mongo and Tailwindcss.

## 📜 System Requirement

- Node.js `18.16.1` or later [👉 Install Node](https://nodejs.org/es/download)
- Nextjs `13.5.6` or later [👉 Install Next](https://nextjs.org/docs/getting-started)
- NPM [👉 Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Nestjs](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [MongoDB](https://www.mongodb.com/) database.

### Visual Studio Code

Extensions aditionals

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor.

## 🗃️ Environment

You can use the `.env.template` file to create your `.env` file. This file is used to set the environment variables.

## 📚 Folder Structure

- `frontend/`: Source code base. Frontend made with **NextJS**
- `backend/`: Source code base. Backend made with **NestJS**
- `provision/`: The files to provision the Docker containers

## 🐳 Running the app inside containers

To run the application with containers you will need:

- Docker. [👉 Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose. [👉 Install Docker Compose](https://docs.docker.com/compose/install/)
- Make. [👉 Install Make](https://www.gnu.org/software/make/)

then run the following command int the root `/` to initialize the application:

Build the containers

```bash
  make app.build_dev
```

Run the containers

```bash
  make app.run_dev
```

Or you can run the **frontend** container with one command

```bash
  make frontend.start
```

Run tests

```bash
  make frontend.test
```

```bash
  make frontend.test.watch
```

Or you can run the **backend** container with one command

```bash
  make backend.start
```

Run tests

```bash
  make backend.test
```

```bash
  make backend.test.watch
```
