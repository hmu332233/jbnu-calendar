const mongoose = require('mongoose');

const CONSTANTS = {
};

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  url: {
    type: String,
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
  },
  isAllDay: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: false,
  }
});

const model = mongoose.model('event', schema);

module.exports = {
  db: { events: model },
  CONSTANTS
};