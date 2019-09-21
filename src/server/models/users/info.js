const mongoose = require('mongoose');

const CONSTANTS = {
  LEVEL: {
    ADMIN: 'admin',
    MANAGER: 'manager',
    BASIC: 'basic'
  },
};

// schema
const schema = mongoose.Schema({
  email: { 
    type: String,
    required:[true, 'User - email is required!'],
    unique: true
  },
  password: { 
    type: String,
    required:[true, 'User - password is required!']
  },
  level: {
    type: String,
    default: CONSTANTS.LEVEL.BASIC
  }
});

const model = mongoose.model('user', schema);

module.exports = {
  db: { users: model },
  CONSTANTS
};