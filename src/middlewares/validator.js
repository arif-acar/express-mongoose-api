const validator = (schema) => (req, res, next) => {
  if (schema?.body) {
    const { error } = schema.body.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      const errorMessage = details.map((detail) => detail.message).join(', ');
      next(new Error(errorMessage));
    }
  }
};

module.exports = validator;
