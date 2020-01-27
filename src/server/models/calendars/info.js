const mongoose = require('mongoose');

const CONSTANTS = {};

const schema = mongoose.Schema({
  id: String,
  name: String,
  color: String,
  bgColor: String,
  dragBgColor: String,
  borderColor: String,
});

const model = mongoose.model('calendar', schema);

module.exports = {
  db: { calendars: model },
  CONSTANTS,
};
