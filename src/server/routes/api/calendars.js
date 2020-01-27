const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/', controller.calendars.getAllCalendar);

module.exports = router;
