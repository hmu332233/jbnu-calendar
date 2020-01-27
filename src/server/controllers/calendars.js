const Calendars = require('../models/calendars');

exports.getAllCalendar = async (req, res, next) => {
  try {
    const calendars = await Calendars.getAllCalendars();
    res.json(calendars);
  } catch (err) {
    next(err);
  }
};
