const JoiDate = require('@hapi/joi-date');
const Joi = require('joi').extend(JoiDate);

const retriveDataByFilterSchema = {
  body: Joi.object().keys({
    minCount: Joi.number().integer().required(),
    maxCount: Joi.number().integer().greater(Joi.ref('minCount')).required(),
    startDate: Joi.date().format('YYYY-MM-DD').required(),
    endDate: Joi.date()
      .min(Joi.ref('startDate'))
      .format('YYYY-MM-DD')
      .required(),
  }),
};

module.exports = {
  retriveDataByFilterSchema,
};
