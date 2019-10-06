const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

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
app.use(middleware.error.handler)

module.exports = app;