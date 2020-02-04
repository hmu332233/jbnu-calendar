const { db, CONSTANTS } = require('./info');
const dayjs = require('dayjs');

exports.CONSTANTS = CONSTANTS;

exports.create = ({ calendarId, title, body, location, url, start, end, category, show = false }) => {
  return db.schedules.create({
    calendarId,
    title,
    body,
    location,
    url,
    start: dayjs(start).toDate(),
    end: dayjs(end).toDate(),
    category,
    show,
  });
};

exports.getMySchedules = () => {
  return db.schedules.find({}).lean();
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
      show: true,
    })
    .lean();
};

exports.getSchedulesWithin3Month = ({ date = new Date() } = {}) => {
  const startDate = dayjs(date)
    .startOf('month')
    .subtract(1, 'month')
    .toDate();
  const endDate = dayjs(date)
    .endOf('month')
    .add(1, 'month')
    .toDate();

  const betweenQuery = { $gte: startDate, $lt: endDate };
  return db.schedules
    .find({
      $or: [{ start: betweenQuery }, { end: betweenQuery }],
      show: true,
    })
    .lean();
};
