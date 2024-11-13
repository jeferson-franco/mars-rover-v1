const express = require('express');
const cors = require('cors');
const RoverService = require('./services/RoverService');

const app = express();
app.use(cors());
app.use(express.json());

const roverService = new RoverService();

app.post('/api/rover/move', (req, res) => {
  try {
    const { plateau, rovers } = req.body;

    if (!plateau || !rovers || !Array.isArray(rovers)) {
      return res.status(400).json({ error: 'Invalid input format' });
    }

    const [plateauX, plateauY] = plateau.split(' ').map(Number);

    if (!roverService.validatePlateau(plateauX, plateauY)) {
      return res.status(400).json({ error: 'Invalid plateau coordinates' });
    }

    const results = rovers.map((rover) => {
      try {
        return {
          initial: rover.position,
          instructions: rover.instructions,
          final: roverService.moveRover(
            rover.position,
            rover.instructions,
            plateauX,
            plateauY,
          ),
        };
      } catch (error) {
        return {
          initial: rover.position,
          instructions: rover.instructions,
          error: error.message,
        };
      }
    });

    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
