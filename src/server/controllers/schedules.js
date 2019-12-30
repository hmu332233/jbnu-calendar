const Schedules = require('../models/schedules');

exports.create = async (req, res, next) => {
  const { calendarId, title, body, location, url, start, end, allDay } = req.body;
  try {
    const newSchedule = await Schedules.create({
      calendarId,
      title,
      body,
      location,
      url,
      start,
      end,
      category: allDay ? Schedules.CONSTANTS.CATEGORY.ALLDAY : Schedules.CONSTANTS.CATEGORY.TIME,
    });
    res.json(newSchedule);
  } catch (err) {
    next(err);
  }
};

exports.getSchedulesWithin1Month = async (req, res, next) => {
  const { date } = req.query;
  try {
    const schedules = await Schedules.getSchedulesWithin1Month({ date });
    res.json(schedules.map(v => ({ ...v, id: v._id })));
  } catch (err) {
    next(err);
  }
};
