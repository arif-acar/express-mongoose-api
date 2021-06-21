const { cleanEnv, port, url, json } = require('envalid');

const env = cleanEnv(process.env, {
  PORT: port({ desc: 'Port for the App', default: 3000 }),
  MONGODB_URL: url({
    desc: 'Access URL for MongoDB',
    default: 'mongodb://127.0.0.1:27017/',
  }),
  MONGOOSE_OPTIONS: json({
    desc: 'Connection options for mongoose',
    default: JSON.stringify({
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    }),
  }),
});

module.exports = {
  env,
};
