const express = require('express');
const { getProgress, updateProgress } = require('../controllers/progressController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getProgress);
router.post('/', authMiddleware, updateProgress);

module.exports = router;
