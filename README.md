# TESLO SHOP APP

A simple e-commerce app built with Nextjs, React, and Tailwindcss.

## 📜 System Requirement

- Node.js `18.16.1` or later [👉 Install Node](https://nodejs.org/es/download)
- PNPM. [👉 Install pnpm](https://pnpm.io/es/installation)

### Visual Studio Code

Extensions aditionals

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor.

## 🗃️ Environment

You can use the `.env.template` file to create your `.env` file. This file is used to set the environment variables.

## 📚 Folder Structure

- `frontend/`: Source code base. Frontend made with **NextJS**
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

or you can run the containers with one command

```bash
  make frontend.start
```