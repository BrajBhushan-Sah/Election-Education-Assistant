const express = require('express');
const { handleTranslate } = require('../controllers/translateController');
const router = express.Router();

router.post('/', handleTranslate);

module.exports = router;
