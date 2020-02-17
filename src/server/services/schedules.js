const Schedules = require('../models/schedules');
const { sendRequestMessage } = require('../utils/slack');

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

  sendRequestMessage({
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
