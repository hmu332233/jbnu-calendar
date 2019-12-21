const express = require('express');
const router = express.Router();
const path = require('path');

router.get(['/', '/signin'], (req, res) => {
  res.sendFile(path.join(__dirname + './../../../../dist/index.html'));
});

module.exports = router;