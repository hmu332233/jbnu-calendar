const express = require('express');
const router = express.Router();

const middleware = require('../../middlewares');
const controller = require('../../controllers');

router.get('/', controller.schedules.getSchedulesWithin3Month);
router.get('/my', middleware.auth.checkAuth(), controller.schedules.getMySchedules);
router.post('/', controller.schedules.create);

router.put('/:id/show', middleware.auth.checkAuth(), controller.schedules.updateShow);

module.exports = router;
