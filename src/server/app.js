const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const createError = require('http-errors');

const middleware = require('./middlewares');
const config = require('./configs');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('DB connected!');
});
db.on('error', err => {
  console.log('DB ERROR:', err);
});

NODE_ENV = 'development';

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(middleware.logger.params);

app.use(express.static('dist'));

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/view'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  let apiError = err;

  if (!err.status) {
    apiError = createError(err);
  }

  // set locals, only providing error in development
  res.locals.message = apiError.message;
  res.locals.error = NODE_ENV === 'development' ? apiError : {};

  return res.status(apiError.status).json({ message: apiError.message });
});



module.exports = app;