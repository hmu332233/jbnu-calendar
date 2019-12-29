const Schedules = require('../models/schedules');

exports.getSchedulesWithin1Month = async (req, res, next) => {
  const { date } = req.body;
  try {
    const schedules = await Schedules.getSchedulesWithin1Month({ date });
    res.json(schedules);
  } catch (err) {
    next(err);
  }
};
