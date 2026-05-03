// ═══════════════════════════════════════════════════════════════
//  Content Index — Convenience re-export of all civic content
// ═══════════════════════════════════════════════════════════════

const { ELECTION_TIMELINE } = require('./electionTimeline');
const { VOTER_REGISTRATION_GUIDE } = require('./voterRegistrationGuide');
const { POLLING_DAY_GUIDE } = require('./pollingDayGuide');
const { COUNTING_RESULTS_GUIDE } = require('./countingResultsGuide');
const { OFFICIAL_FORMS, searchForms, filterByCategory, getCategories } = require('./officialForms');
const { QUIZ_BANK, QUIZ_CATEGORIES, getQuizQuestions } = require('./quizBank');

module.exports = {
  ELECTION_TIMELINE,
  VOTER_REGISTRATION_GUIDE,
  POLLING_DAY_GUIDE,
  COUNTING_RESULTS_GUIDE,
  OFFICIAL_FORMS,
  searchForms,
  filterByCategory,
  getCategories,
  QUIZ_BANK,
  QUIZ_CATEGORIES,
  getQuizQuestions,
};
