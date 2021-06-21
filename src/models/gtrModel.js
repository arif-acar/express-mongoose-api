const mongoose = require('mongoose');

const gtrSchema = new mongoose.Schema({
  key: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  counts: {
    type: Array,
  },
  value: {
    type: String,
  },
});

/**
 * @typedef gtrModel
 */
const gtrModel = mongoose.model('gtrModel', gtrSchema, 'records');

module.exports = gtrModel;
