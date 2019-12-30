const { db, CONSTANTS } = require('./info');
const dayjs = require('dayjs');

exports.CONSTANTS = CONSTANTS;

exports.create = ({ calendarId, title, body, location, url, start, end, category }) => {
  return db.schedules.create({
    calendarId,
    title,
    body,
    location,
    url,
    start: dayjs(start).toDate(),
    end: dayjs(end).toDate(),
    category,
    show: true,
  });
};

exports.getSchedulesWithin1Month = ({ date = new Date() } = {}) => {
  const startDate = dayjs(date)
    .startOf('month')
    .toDate();
  const endDate = dayjs(date)
    .endOf('month')
    .toDate();

  const betweenQuery = { $gte: startDate, $lt: endDate };
  return db.schedules
    .find({
      $or: [{ start: betweenQuery }, { end: betweenQuery }],
    })
    .lean();
};
