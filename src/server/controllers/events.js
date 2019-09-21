const Event = require('../models/events');

exports.create = async (req, res, next) => {
  const { name, location, url, startDate, endDate, isAllDay } = req.body;

  try {
    await Event.create({ name, location, url, startDate, endDate, isAllDay });
    res.json({ result: true });
  } catch (e) {
    throw e;
  }
}