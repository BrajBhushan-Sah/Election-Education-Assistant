// ═══════════════════════════════════════════════════════════════
//  Quiz Controller — Uses local quiz bank with Gemini fallback
// ═══════════════════════════════════════════════════════════════

const { getQuizQuestions, QUIZ_CATEGORIES } = require('../content/quizBank');
const { saveQuizResult } = require('../services/dbService');

/**
 * POST /api/quiz/generate
 * Returns quiz questions from the local bank.
 * Uses the curated, neutrality-reviewed quiz bank by default.
 */
const generateQuiz = async (req, res, next) => {
  try {
    const { topic, count } = req.body;
    const numQuestions = Math.min(Math.max(count || 5, 1), 10);
    const questions = getQuizQuestions(numQuestions, topic);

    if (questions.length === 0) {
      return res.status(400).json({
        message: `No questions found for topic "${topic}". Available topics: ${QUIZ_CATEGORIES.join(', ')}`,
      });
    }

    res.json({ questions, topic: topic || 'All', totalQuestions: questions.length });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/quiz/submit
 * Saves a quiz result to Firestore.
 */
const submitQuiz = async (req, res, next) => {
  try {
    const { score, totalQuestions, topic } = req.body;
    const userId = req.user.uid;

    await saveQuizResult(userId, { score, totalQuestions, topic });
    res.json({ message: 'Quiz submitted successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/quiz/categories
 * Returns available quiz categories.
 */
const getCategories = (req, res) => {
  res.json({ categories: QUIZ_CATEGORIES });
};

module.exports = { generateQuiz, submitQuiz, getCategories };
