# Rest API for Gtr Record API
A rest api application for retrieve data from MongoDB by using Node.js, Express, and Mongoose.

## Quick Start

Clone the repo:

```bash
git clone --depth 1 https://github.com/hagopj13/node-express-boilerplate.git
cd gtr-record-app
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
```

## Environment Variables

Example environment variables that `.env` file should inclue
```bash
# Port number
PORT=3000

# URL for the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/
```

## Commands

Run for development:

```bash
npm run dev
```

Run for production:

```bash
npm start
```

Testing:

```bash
# run all tests
npm run test
```

Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

## Project Structure
```
src\
 |--controllers\    # Route controllers
 |--middlewares\    # Custom middlewares
 |--models\         # Mongoose model
 |--routes\         # Routes for Rest API
 |--services\       # Business logic for controller
 |--validations\    # Request data schemas for validation
 |--index.js        # Express App entry point
```

## API Documentation

API documentation that generated via Swagger UI will be available `http://localhost:5000/doc` after application started. 





