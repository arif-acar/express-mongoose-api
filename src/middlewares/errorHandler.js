const httpStatus = require('http-status');

// disable no-unused-vars for error mw otherwise error mw will not work
// eslint-disable-next-line no-unused-vars
const errorHandler = async (err, req, res, next) => {
  const { message } = err;
  // TO-DO: Add custom error with custom status codes
  res.status(httpStatus.NOT_FOUND).send({
    code: httpStatus.NOT_FOUND,
    msg: message,
  });
};

module.exports = {
  errorHandler,
};
