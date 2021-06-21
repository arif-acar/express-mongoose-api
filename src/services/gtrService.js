const { gtrModel } = require('../models');

/**
 * Get data by filter parameters
 * @param {Number} lowerLimit
 * @param {Number} upperLimit
 * @param {Date} starDate
 * @param {Date} endDate
 * @returns {Promise<gtrModel>}
 */
const retrieveData = async (lowerLimit, upperLimit, startDate, endDate) => {
  try {
    const data = await gtrModel.aggregate([
      {
        $addFields: { totalCount: { $sum: '$counts' } },
      },
      {
        $match: {
          totalCount: { $gt: lowerLimit, $lt: upperLimit },
          createdAt: {
            $gt: new Date(startDate),
            $lt: new Date(endDate),
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: 1,
        },
      },
    ]);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  retrieveData,
};
