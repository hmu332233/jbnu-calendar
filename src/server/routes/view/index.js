const express = require('express');
const router = express.Router();
const path = require('path');

const { checkView } = require('../../middlewares/auth');

const PUBLIC_DIR = process.env.NODE_ENV === 'development' ? 'dist' : 'build';

const goToIndexHtml = (req, res) => res.sendFile(path.join(__dirname + `./../../../../${PUBLIC_DIR}/index.html`));

router.get(['/', '/about', '/signin', '/request'], goToIndexHtml);
router.get(['/schedules', '/schedules/new'], checkView(), goToIndexHtml);

module.exports = router;
