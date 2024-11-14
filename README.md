# Mars Rover Mission Control System

A NASA Mars Rover mission control system that allows operators to navigate multiple rovers on a Martian plateau through a user-friendly web interface.

## 🚀 Project Overview

This project implements a mission control system for NASA's Mars Rovers, allowing operators to:

- Define plateau boundaries.
- Deploy multiple rovers with specific landing positions.
- Issue navigation commands to rovers.
- Visualize rover movements and positions in real-time.

## 🏗️ Project Structure

```
mars-rover-v1/
├── backend/             # Node.js/Express API server
│   ├── src/
│   │   ├── app.js
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   ├── jest.config.js
│   ├── playwright.config.js
│   └── package.json
│
├── frontend/            # Vue.js client application
│   ├── src/
│   │   ├── components/
│   │   │   ├── RoverControl/
│   │   │   │   ├── RoverInput.vue
│   │   │   │   └── RoverGrid.vue
│   │   ├── store/
│   │   │   └── roverStore.js
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
│
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md            # This file
```

## 🛠️ Technology Stack

### Backend

- Node.js with Express
- Jest and Playwright for testing
- Cors for cross-origin resource sharing
- MongoDB/MySQL for data storage (optional)

### Frontend

- Vue.js 3
- Axios for API communication
- Vuex for state management

### Docker

- Docker and Docker Compose for containerization

## 🔧 Setup & Installation

### Prerequisites

- Docker and Docker Compose installed on your machine
- Node.js (v14 or higher) and npm (v6 or higher) if running without Docker

### Running the Application with Docker

#### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/mars-rover-v1.git
cd mars-rover-v1
```

#### 2. Start the application using Docker Compose:

```bash
docker-compose up --build
```

This command will build and start both the backend and frontend containers.

#### 3. Access the application:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### Running the Application Without Docker

#### Backend Setup

1. Navigate to the backend directory (cd backend)
2. Install dependencies (npm install)
3. Start the backend server (npm run dev)

The backend server will run on http://localhost:3000

#### Frontend Setup

1. Navigate to the frontend directory (cd frontend)
2. Install dependencies (npm install)
3. Start the frontend application (npm run dev)

The frontend application will run on http://localhost:5173

## 📡 API Endpoints

### POST /api/rover/move

Processes rover movement commands.

Request body:

```json
{
  "plateau": "5 5",
  "rovers": [
    {
      "position": "1 2 N",
      "instructions": "LMLMLMLMM"
    },
    {
      "position": "3 3 E",
      "instructions": "MRRMMRMRRM"
    }
  ]
}
```

Response:

```json
{
  "results": [
    {
      "initial": "1 2 N",
      "instructions": "LMLMLMLMM",
      "final": "1 3 N"
    },
    {
      "initial": "3 3 E",
      "instructions": "MMRMMRMRRM",
      "final": "5 1 E"
    }
  ]
}
```

## 🎮 Usage Instructions

1. Start the application (using Docker or manually as described above).
2. Access the frontend application in your browser at http://localhost:5173.
3. Define the plateau size (e.g., "5 5") via the user interface.
4. Add multiple rovers by providing:
   -- Initial position (e.g., "1 2 N")
   -- Movement instructions (e.g., "LMLMLMLMM")
5. Submit the commands to see the rovers' final positions and visualize their movements on the plateau grid.

## 🧪 Testing

### Backend Tests

You can run the tests using the following commands:

```bash
cd backend

# Run unit and integration tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

The test suite includes:

- Unit tests for models, services, and utilities
- API integration tests
- End-to-end tests using Playwright

### Frontend Tests

(WIP: Instructions for frontend tests, if implemented)

## 📝 Command Reference

Rover Commands:

- **L**: Turn left 90 degrees
- **R**: Turn right 90 degrees
- **M**: Move forward one grid point

Cardinal Directions:

- **N**: North
- **E**: East
- **S**: South
- **W**: West

## 🔍 Implementation Notes

- **Multiple Rover Support**: The application allows adding and controlling multiple rovers sequentially.
- **User Interface**: All data input is performed via the frontend application, providing a user-friendly experience.
- **Validation**: Input validation ensures rovers stay within plateau boundaries.
- **Visualization**: The frontend visualizes rover movements and final positions on the plateau grid.
- **Dockerization**: The entire project is containerized using Docker, facilitating easy deployment.

## 💾 Data Storage (Bonus)

- **Database Integration**: The application can be configured to use MongoDB or MySQL for storing rover data.
- **Setup Instructions**: (WIP: Include instructions on how to set up and configure the database.)

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Open a Pull Request

## 🤝 Support

For questions and support, contact:

- Email: jefersonfranco@pm.me
