// ═══════════════════════════════════════════════════════════════
//  Official Forms Directory — Metadata for Form Finder feature
//  All URLs point to official government portals only.
// ═══════════════════════════════════════════════════════════════

const OFFICIAL_FORMS = [
  {
    id: 'form6',
    name: 'Form 6',
    category: 'New Registration',
    description: 'Application for inclusion of name in the electoral roll for the first time. Use this if you are a new voter who has turned 18 or has never registered before.',
    eligibility: 'Indian citizens aged 18+ who are not yet registered.',
    documentsRequired: ['Proof of age', 'Proof of address', 'Passport-size photograph'],
    officialUrl: 'https://voters.eci.gov.in/signup',
    downloadUrl: 'https://www.eci.gov.in/files/file/14722-form-6/',
    tags: ['new voter', 'first time', 'registration', '18 years'],
  },
  {
    id: 'form6a',
    name: 'Form 6A',
    category: 'NRI / Overseas Registration',
    description: 'Application for registration as an overseas elector. For Indian citizens living abroad who hold a valid Indian passport.',
    eligibility: 'Indian citizens residing abroad with a valid Indian passport.',
    documentsRequired: ['Valid Indian passport', 'Proof of present overseas address'],
    officialUrl: 'https://voters.eci.gov.in/signup',
    downloadUrl: 'https://www.eci.gov.in/files/file/14723-form-6a/',
    tags: ['NRI', 'overseas', 'abroad', 'passport'],
  },
  {
    id: 'form7',
    name: 'Form 7',
    category: 'Name Removal / Objection',
    description: 'Application for objection to an entry or request for deletion of a name from the electoral roll. Commonly used to remove the name of a deceased family member.',
    eligibility: 'Any registered elector in the constituency.',
    documentsRequired: ['Details of the person whose entry is objected to', 'Supporting evidence if applicable'],
    officialUrl: 'https://voters.eci.gov.in',
    downloadUrl: 'https://www.eci.gov.in/files/file/14724-form-7/',
    tags: ['deletion', 'removal', 'deceased', 'objection'],
  },
  {
    id: 'form8',
    name: 'Form 8',
    category: 'Correction of Details',
    description: 'Application for correction of entries in the electoral roll. Use this to update your name, age, address, photograph, or other personal details.',
    eligibility: 'Any registered elector whose details need updating.',
    documentsRequired: ['Supporting document for the correction (e.g., updated address proof, corrected name document)'],
    officialUrl: 'https://voters.eci.gov.in',
    downloadUrl: 'https://www.eci.gov.in/files/file/14725-form-8/',
    tags: ['correction', 'update', 'name change', 'address change', 'photo'],
  },
  {
    id: 'form8a',
    name: 'Form 8A',
    category: 'Transfer Within Constituency',
    description: 'Application for transposition of entry within the same assembly constituency. Use this if you have moved to a new address but remain within the same constituency.',
    eligibility: 'Registered elector who has moved within the same constituency.',
    documentsRequired: ['Proof of new address within the same constituency'],
    officialUrl: 'https://voters.eci.gov.in',
    downloadUrl: 'https://www.eci.gov.in/files/file/14726-form-8a/',
    tags: ['transfer', 'move', 'same constituency', 'transposition'],
  },
  {
    id: 'form2',
    name: 'Form 2',
    category: 'Service Voter Registration',
    description: 'Application for inclusion of name in the electoral roll by a service voter (members of armed forces, central paramilitary forces, and diplomatic staff abroad).',
    eligibility: 'Members of the armed forces, central police organisations, and government officials posted abroad.',
    documentsRequired: ['Service identity proof', 'Declaration from commanding officer'],
    officialUrl: 'https://voters.eci.gov.in',
    downloadUrl: 'https://www.eci.gov.in/files/file/14721-form-2/',
    tags: ['service voter', 'armed forces', 'military', 'postal ballot'],
  },
  {
    id: 'postal',
    name: 'Form 12D',
    category: 'Postal Ballot',
    description: 'Application for a postal ballot. Available to service voters, electors on election duty, senior citizens (80+), persons with disabilities, and COVID-positive electors (when applicable).',
    eligibility: 'Eligible categories as notified by the Election Commission.',
    documentsRequired: ['Varies by category — check the official notification'],
    officialUrl: 'https://www.eci.gov.in',
    downloadUrl: 'https://www.eci.gov.in',
    tags: ['postal ballot', 'absentee', 'senior citizen', 'disability', 'mail-in'],
  },
];

/**
 * Search forms by keyword — matches against name, description, category, and tags.
 */
function searchForms(query) {
  if (!query || typeof query !== 'string') return OFFICIAL_FORMS;
  const q = query.toLowerCase().trim();
  return OFFICIAL_FORMS.filter((form) =>
    form.name.toLowerCase().includes(q) ||
    form.description.toLowerCase().includes(q) ||
    form.category.toLowerCase().includes(q) ||
    form.tags.some((t) => t.includes(q))
  );
}

/**
 * Filter forms by category.
 */
function filterByCategory(category) {
  if (!category || category === 'All') return OFFICIAL_FORMS;
  return OFFICIAL_FORMS.filter((f) => f.category === category);
}

/**
 * Get unique category names.
 */
function getCategories() {
  return ['All', ...new Set(OFFICIAL_FORMS.map((f) => f.category))];
}

module.exports = { OFFICIAL_FORMS, searchForms, filterByCategory, getCategories };
