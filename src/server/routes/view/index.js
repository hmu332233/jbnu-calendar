const express = require('express');
const router = express.Router();
const path = require('path');

const { checkView } = require('../../middlewares/auth');

router.get(['/', '/signin', '/request'], (req, res) => {
  res.sendFile(path.join(__dirname + './../../../../dist/index.html'));
});

router.get(['/schedules'], checkView(), (req, res) => {
  res.sendFile(path.join(__dirname + './../../../../dist/index.html'));
});

module.exports = router;
