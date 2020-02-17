const Schedules = require('../models/schedules');

exports.create = async ({ calendarId, title, body, location, url, start, end, category }) => {
  const newSchedule = await Schedules.create({
    calendarId,
    title,
    body,
    location,
    url,
    start,
    end,
    category,
  });

  return newSchedule;
};
