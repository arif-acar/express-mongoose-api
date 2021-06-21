const { gtrService } = require('../services');

// Async function handler to catch async error
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

const retrieveData = asyncHandler(async (req, res) => {
  const data = await gtrService.retrieveData(
    req.body.minCount,
    req.body.maxCount,
    req.body.startDate,
    req.body.endDate
  );
  if (!data || !data.length) throw new Error('No Record found');

  res.json({ code: 0, msg: 'success', records: data });
});

module.exports = {
  retrieveData,
};
