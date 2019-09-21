const Events = require('../models/events');

const dayjs = require('dayjs');

exports.create = async (req, res, next) => {
  const { name, location, url, startDate, endDate, isAllDay } = req.body;

  try {
    await Events.create({ name, location, url, startDate, endDate, isAllDay });
    res.json({ result: true });
  } catch (e) {
    next(e);
  }
}

exports.getEventsWithin3Month = async (req, res, next) => {
  const { date } = req.query;
  const isValid = dayjs(date).isValid();

  if (!isValid) {
    return res.status(400).json({ result: false, message: 'Invalid Date' });
  }

  try {
    const events = await Events.getEventsWithin3Month({ date });
    res.json({ result: true, data: events });
  } catch (e) {
    next(e);
  }
}