const express = require('express');
const { generateQuiz, submitQuiz, getCategories } = require('../controllers/quizController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/generate', generateQuiz);
router.post('/submit', authMiddleware, submitQuiz);
router.get('/categories', getCategories);

module.exports = router;
