const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/', controller.events.getEventsWithin3Month);
router.post('/', controller.events.create);

module.exports = router;