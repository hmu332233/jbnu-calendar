const express = require('express');
const router = express.Router();

router.use('/v1/events', require('./events'));

module.exports = router;