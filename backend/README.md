# mars-rover-v1/backend

to create backend structure:

```bash
mkdir mars-rover-v1
cd mars-rover-v1
mkdir backend
cd backend
npm init -y
npm install express cors dotenv nodemon jest supertest
```

create rover logic (backend/src/services/RoverService.js)

create express app (backend/src/app.js)

create test file (backend/src/tests/rover.test.js)

to run backend:

```bash
# Add to package.json scripts:
# "start": "node src/app.js",
# "dev": "nodemon src/app.js",
# "test": "jest"

npm run dev
```

to test backend:

```bash
curl -X POST http://localhost:3000/api/rover/move \
-H "Content-Type: application/json" \
-d '{
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
}'
```
