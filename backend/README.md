# Mars Rover Mission Control System - Backend

## Overview

The backend provides a RESTful API to process commands for NASA's Mars Rovers, manage rover data, and communicate with the frontend application.

## Features

- Built with Node.js and Express.
- Input validation and error handling.
- Integration with MongoDB for data storage (WIP).
- Automated testing with Jest and Supertest.
- End-to-end testing with Playwright.
- Dockerized for easy deployment.

## Requirements

- Node.js v14 or higher
- npm v6 or higher
- MongoDB instance (can be Dockerized)
- Docker and Docker Compose (optional for containerization)

## Setup Instructions

### Local Setup

1. Clone the repository and navigate to the backend directory (cd mars-rover-v1/backend)
2. Install dependencies (npm install)
3. Configure Environment Variables:

Create a `.env` file in the root of the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/mars_rover
PORT=3000
```

4. Start MongoDB, if not running (docker run -d -p 27017:27017 --name mongodb mongo)
5. Start the Backend Server (npm run dev)

The server will run at http://localhost:3000.

### Docker Setup

1. Ensure Docker is installed and running.
2. Navigate to the project root directory (cd mars-rover-v1)
3. Start the containers (docker-compose up --build)

## Testing

### Unit and Integration Tests

```bash
npm test
```

### Coverage Report

```bash
npm run test:coverage
```

### End-to-End Tests

Ensure the backend and frontend are running.

```bash
npm run test:e2e
```

## API Documentation

Refer the the main README or the API documentation for endpoint details.

## Contributing

Contributions are welcome! Please follow the guidelines in the main README.

## DIY

To set up the Mars Rover Mission Control System backend from scratch, follow these steps to install the required dependencies:

1. Make sure you have Node.js (v14 or higher) and npm (v6 or higher) installed on your machine. You can check the installed versions by running:

```
node --version
npm --version
```

2. Create a new directory for your backend project and navigate into it:

```
mkdir mars-rover-backend
cd mars-rover-backend
```

3. Initialize a new Node.js project:

```
npm init -y
```

4. Install the required dependencies one by one using npm:

```
npm install express
npm install cors
npm install dotenv
npm install nodemon --save-dev
npm install jest --save-dev
npm install supertest --save-dev
npm install playwright --save-dev
```

5. Create the necessary directories and files for your project structure:

```
backend/
├── src/
│   ├── app.js
│   ├── models/
│   ├── services/
│   └── utils/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── jest.config.js
├── playwright.config.js
├── package.json
└── Dockerfile
```

6. Open the `package.json` file and add the necessary scripts for running the backend server and tests:

```
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
  "test": "jest --verbose",
  "test:watch": "jest --watch",
  "test:unit": "jest --verbose --testPathPattern=unit",
  "test:e2e": "NODE_ENV=test playwright test",
  "test:coverage": "jest --coverage"
}
```

7. Create a `jest.config.js` file in the backend directory with the following content:

```
module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/unit/**/*.test.js',
    '**/tests/integration/**/*.test.js',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/'],
};
```

8. Create a `playwright.config.js` file in the backend directory with the following content:

```
module.exports = {
  testDir: './tests/e2e',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
  },
};
```

9. To run the backend server, use the following command:

```
npm run dev
```

10. To run the tests, use the following commands:

```
npm test
npm run test:coverage
```

With these steps, you should have the initial dependencies installed and the project structure set up for the Mars Rover Mission Control System backend. You can now proceed with implementing the backend functionality and writing tests.

Remember to configure any necessary environment variables, such as database connection URLs or API keys, in a `.env` file or through the appropriate means based on your project's requirements.
