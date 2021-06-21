const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const { env } = require('../env');
const router = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

const startApp = () => {
  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${env.PORT}`);
  });
};

(async () => {
  try {
    await mongoose.connect(env.MONGODB_URL, env.MONGOOSE_OPTIONS);
    // start the server after mongoose connection established
    startApp();
  } catch (err) {
    console.error(`error: ${err}`);
  }
})();

// setup body parser middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// setup api router
app.use(router);

// return custom message for unavailable endpoints
app.use((req, res) => {
  res.send({
    code: 404,
    msg: 'You are trying to access to an undefined endpoint. See the /doc endpoint to check available endpoints',
  });
});

// setup custom error middleware
app.use(errorHandler);

const closeDBConnection = async () => {
  await mongoose.connection.close();
};

module.exports = {
  app,
  closeDBConnection,
};
