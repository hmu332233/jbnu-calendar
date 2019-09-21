const express = require('express');
const router = express.Router();

router.use('/v1/events', require('./events'));
router.use('/v1/auth', require('./auth'));

module.exports = router;