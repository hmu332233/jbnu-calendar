const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

// if (NODE_ENV === 'development') {
//   app.use('/', express.static('dist'));
// } else {
//   app.use('/assets', express.static('build'));
// }

// app.use('/api', require('./routes/api'));
// app.use('/', require('./routes/view'));

// Server
const port = 3000;
app.listen(port, () => {
  console.log('listening on port:' + port);
});
