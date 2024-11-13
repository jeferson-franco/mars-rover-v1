# Mars Rover Mission Control System

A NASA Mars Rover mission control system that allows operators to navigate multiple rovers on a Martian plateau through a user-friendly web interface.

## 🚀 Project Overview

This project implements a mission control system for NASA's Mars Rovers, allowing operators to:

- Define plateau boundaries
- Deploy multiple rovers with specific landing positions
- Issue navigation commands to rovers
- Visualize rover movements and positions in real-time

## 🏗️ Project Structure

```
mars-rover/
├── backend/ # Node.js/Express API server
│ ├── src/
│ │ ├── services/ # Business logic (RoverService)
│ │ ├── tests/ # Unit tests
│ │ └── app.js # Express application
│ └── package.json
│
├── frontend/ # Vue.js client application
│ ├── src/
│ │ ├── components/
│ │ │ └── RoverControl/
│ │ │ ├── RoverInput.vue
│ │ │ └── RoverGrid.vue
│ │ ├── store/
│ │ │ └── roverStore.js
│ │ ├── App.vue
│ │ └── main.js
│ └── package.json
│
└── README.md # This file
```

## 🛠️ Technology Stack

### Backend

- Node.js with Express
- Jest for testing
- Cors for cross-origin resource sharing

### Frontend

- Vue.js 3
- Axios for API communication
- Vuex for state management

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

The backend server will run on http://localhost:3000

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

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
      "finalPosition": "1 3 N"
    },
    {
      "finalPosition": "2 3 S"
    }
  ]
}
```

## 🎮 Usage Instructions

1. Start both backend and frontend servers
2. Access the frontend application in your browser
3. Input the plateau size (e.g., "5 5")
4. For each rover, provide:
   -- Initial position (e.g., "1 2 N")
   -- Movement instructions (e.g., "LMLMLMLMM")
5. Submit the commands to see the rovers' final positions

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

The test suite includes:

- Unit tests for RoverService
- API integration tests

## 📝 Command Reference

Rover Commands:

- L: Turn left 90 degrees
- R: Turn right 90 degrees
- M: Move forward one grid point

Cardinal Directions:

- N: North
- E: East
- S: South
- W: West

## 🔍 Implementation Notes

- Each rover moves sequentially
- Rovers maintain their position and orientation between commands
- The plateau grid starts at (0,0) with coordinates increasing north and east
- Input validation ensures rovers stay within plateau boundaries

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Open a Pull Request

## 🤝 Support

For questions and support, contact:

- Email: jefersonfranco@pm.me
