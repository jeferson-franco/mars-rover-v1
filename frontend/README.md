# Mars Rover Mission Control System - Frontend

## Overview

The frontend is a Vue.js application that allows users to interact with the Mars Rover Mission Control System, providing a graphical interface for inputting rover data and visualizing rover movements.

## Features

- User-friendly input forms for plateau dimensions and rover details.
- Visualization of rovers on a grid representing the Martian plateau.
- Real-time updates of rover positions.
- Communication with the backend API using Axios.
- State management with Vuex.

## Requirements

- Node.js v14 or higher
- npm v6 or higher
- Docker and Docker Compose (optional for containerization)

## Setup Instructions

### Local Setup

1. Navigate to the frontend directory (cd mars-rover-v1/frontend)
2. Install dependencies (npm install)
3. Start the Frontend Application (npm run dev)

The application will be accessible at http://localhost:5173.

### Docker Setup

1. Ensure Docker is installed and running.
2. Navigate to the project root directory (cd mars-rover-v1)
3. Start the containers (docker-compose up --build)

## Usage

- Access the application at http://localhost:5173.
- Input the plateau size (e.g., "5 5").
- Add rovers by specifying their initial positions and movement instructions.
- Visualize the rover movements and final positions on the grid.

## Testing

**Note:** Frontend testing setup is in progress and will be updated soon.

## Contributing

Contributions are welcome! Please follow the guidelines in the main README.
