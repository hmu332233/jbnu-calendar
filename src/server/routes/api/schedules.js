const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/', controller.schedules.getSchedulesWithin1Month);

module.exports = router;
