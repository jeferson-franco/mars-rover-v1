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

## DIY

To set up the Mars Rover Mission Control System frontend from scratch, follow these steps to install the required dependencies:

1. Make sure you have Node.js (v14 or higher) and npm (v6 or higher) installed on your machine. You can check the installed versions by running:

```
node --version
npm --version
```

2. Create a new directory for your frontend project and navigate into it:

```
mkdir mars-rover-frontend
cd mars-rover-frontend
```

3. Initialize a new Vue.js project using Vite:

```
npm init vue@latest
```

This command will prompt you to select the project settings. Choose the following options:

-- Project name: `mars-rover-frontend`
-- TypeScript: No
-- JSX: No
-- Vue Router: Yes
-- Pinia: No
-- Vitest: No
-- End-to-End Testing: No
-- ESLint: Yes
-- Prettier: Yes

4. Navigate into the project directory:

```
cd mars-rover-frontend
```

5. Install the project dependencies:

```
npm install
```

6. Install additional dependencies required for the project:

```
npm install axios
npm install vuex@next
```

7. Create the necessary directories and files for your project structure:

```
frontend/
├── src/
│   ├── components/
│   │   ├── RoverControl/
│   │   │   ├── RoverInput.vue
│   │   │   └── RoverGrid.vue
│   ├── store/
│   │   └── roverStore.js
│   ├── App.vue
│   └── main.js
├── package.json
└── Dockerfile
```

8. Open the `package.json` file and add any additional scripts if needed, such as:

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
  "format": "prettier .  --write"
}
```

9. To run the frontend development server, use the following command:

```
npm run dev
```

> This command will start the development server, and you can access the application at `http://localhost:5173` (or the specified port).

10. Implement the frontend functionality in the respective files under the `src` directory, following the codebase structure provided in the `frontend/README.md` file.

With these steps, you should have the initial dependencies installed and the project structure set up for the Mars Rover Mission Control System frontend. You can now proceed with implementing the frontend components, store, and necessary logic.

Remember to configure the backend API URL in the frontend code to establish communication between the frontend and backend.

> Note: The frontend testing setup is mentioned as being in progress in the provided codebase context, so you may need to update the testing configuration and scripts once the testing setup is finalized.
