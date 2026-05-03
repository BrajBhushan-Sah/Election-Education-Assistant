const express = require('express');
const {
  getTimeline,
  getRegistrationGuide,
  getPollingGuide,
  getCountingGuide,
  getForms,
} = require('../controllers/contentController');

const router = express.Router();

// All content routes are public — no auth required
router.get('/timeline', getTimeline);
router.get('/registration', getRegistrationGuide);
router.get('/polling-day', getPollingGuide);
router.get('/counting', getCountingGuide);
router.get('/forms', getForms);

module.exports = router;
