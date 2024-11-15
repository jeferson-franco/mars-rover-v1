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
