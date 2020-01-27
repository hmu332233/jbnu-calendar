const { db, CONSTANTS } = require('./info');

exports.CONSTANTS = CONSTANTS;

exports.getAllCalendars = () => {
  return db.calendars.find({}).lean();
};
