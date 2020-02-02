const express = require('express');
const router = express.Router();

router.use('/v1/schedules', require('./schedules'));
router.use('/v1/auth', require('./auth'));
router.use('/v1/calendars', require('./calendars'));

module.exports = router;
