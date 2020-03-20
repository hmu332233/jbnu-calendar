const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const createError = require('http-errors');

const middleware = require('./middlewares');

const { sendErrorMessage } = require('./utils/slack');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('DB connected!');
});
db.on('error', err => {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middleware.logger.params);
app.use(middleware.logger.mongooseDebug);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(express.static('dist'));
} else {
  app.use('/assets', express.static('build'));
}

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
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {};

  if (apiError.status === 500) {
    sendErrorMessage(apiError);
  }

  return res.status(apiError.status).json({ message: apiError.message });
});

module.exports = app;
