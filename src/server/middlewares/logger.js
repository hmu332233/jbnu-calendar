const mongoose = require('mongoose');

exports.mongooseDebug = (req, res, next) => {
  if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }
  next();
};

exports.params = (req, res, next) => {
  if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development') {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
  }
  next();
};
