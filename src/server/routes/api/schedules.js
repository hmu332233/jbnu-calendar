const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/', controller.schedules.getSchedulesWithin3Month);
router.get('/my', controller.schedules.getMySchedules);
router.post('/', controller.schedules.create);

module.exports = router;
