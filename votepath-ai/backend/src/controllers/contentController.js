// ═══════════════════════════════════════════════════════════════
//  Content Controller — Serves static civic education content
//  No authentication required — this is public educational material.
// ═══════════════════════════════════════════════════════════════

const { ELECTION_TIMELINE } = require('../content/electionTimeline');
const { VOTER_REGISTRATION_GUIDE } = require('../content/voterRegistrationGuide');
const { POLLING_DAY_GUIDE } = require('../content/pollingDayGuide');
const { COUNTING_RESULTS_GUIDE } = require('../content/countingResultsGuide');
const { OFFICIAL_FORMS, searchForms, filterByCategory, getCategories } = require('../content/officialForms');

const getTimeline = (req, res) => {
  res.json(ELECTION_TIMELINE);
};

const getRegistrationGuide = (req, res) => {
  res.json(VOTER_REGISTRATION_GUIDE);
};

const getPollingGuide = (req, res) => {
  res.json(POLLING_DAY_GUIDE);
};

const getCountingGuide = (req, res) => {
  res.json(COUNTING_RESULTS_GUIDE);
};

const getForms = (req, res) => {
  const { query, category } = req.query;
  let results;
  if (query) {
    results = searchForms(query);
  } else if (category) {
    results = filterByCategory(category);
  } else {
    results = OFFICIAL_FORMS;
  }
  res.json({ forms: results, categories: getCategories() });
};

module.exports = { getTimeline, getRegistrationGuide, getPollingGuide, getCountingGuide, getForms };
