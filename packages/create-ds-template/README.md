# Create DS Template

Create DS Template is a CLI tool to set up a React project with micro-frontend architecture using Vite, TypeScript, and Chakra UI. This template provides a minimal setup to get started quickly with modern web development practices.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A fast build tool that provides a modern development experience.
- **Chakra UI**: A simple, modular, and accessible component library for React.

## Getting Started

To create a new project using Create DS Template, follow these steps:

1. **Install the CLI globally**:

   ```bash
   npm install -g create-ds-template
   ```

2. **Create a new project**:

   ```bash
   create-ds-template my-project
   ```

3. **Navigate to your project directory**:

   ```bash
   cd my-project
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the development server**:

   ```bash
   npm start
   ```

After the CLI completes its run, the main project will be hosted at `http://localhost:5713`, and the micro-frontends will be loaded at ports `3111`, `3112`, or `3113` respectively, depending on the number of micro-frontends you set up.

## Project Structure

The project structure is organized as follows:


```
├── main/
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.css
│   └── README.md
│
├── micro-fe-1/
├── micro-fe-2/
│
│
├── micro-fe-n/
│
├── lerna.json
└── package.json
```
