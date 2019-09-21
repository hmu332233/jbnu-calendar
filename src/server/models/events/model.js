const { db, CONSTANTS } = require('./info');

exports.create = ({ name, location, url, startDate, endDate, isAllDay }) => {
  const data = { name, location, url, startDate, endDate, isAllDay };
  return db.events.create(data);
};
