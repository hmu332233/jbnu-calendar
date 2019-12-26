const mongoose = require("mongoose");

const CONSTANTS = {
  CATEGORY: {
    TIME: 'time',
    ALLDAY: 'allday',
  },
};

const schema = mongoose.Schema({
  calendarId: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  location: {
    type: String
  },
  url: {
    type: String
  },
  start: {
    type: Date,
    default: new Date()
  },
  end: {
    type: Date
  },
  category: {
    type: String,
    default: CONSTANTS.CATEGORY.ALLDAY,
  },
  show: {
    type: Boolean,
    default: false
  }
});

const model = mongoose.model("schedule", schema);

module.exports = {
  db: { events: model },
  CONSTANTS
};
