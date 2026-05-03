// ═══════════════════════════════════════════════════════════════
//  Voter Registration Guide — Neutral civic education content
// ═══════════════════════════════════════════════════════════════

const VOTER_REGISTRATION_GUIDE = {
  title: 'How to Register as a Voter',
  introduction:
    'Voter registration is your first step toward participating in elections. ' +
    'The process is free of charge and can be completed online or offline. ' +
    'Below is a step-by-step guide to help you register.',

  eligibility: {
    heading: 'Who Can Register?',
    criteria: [
      'You must be a citizen of India.',
      'You must be at least 18 years old on the qualifying date (January 1 of the year of revision of the electoral roll).',
      'You must be a resident of the constituency where you want to register.',
      'You must not be disqualified under any law (e.g., due to unsoundness of mind or certain criminal convictions).',
    ],
  },

  documentsNeeded: {
    heading: 'Documents You May Need',
    items: [
      'Proof of age: Birth certificate, school leaving certificate, passport, or Aadhaar card.',
      'Proof of address: Aadhaar card, utility bill, bank passbook, ration card, or rent agreement.',
      'Passport-size photograph (recent).',
      'If applying for the first time, a declaration of nationality.',
    ],
    note: 'Exact requirements may vary by state. Check your State Election Commission website for specifics.',
  },

  steps: {
    heading: 'Registration Steps',
    online: {
      title: 'Online Method',
      steps: [
        'Visit the National Voter Service Portal: voters.eci.gov.in.',
        'Click on "New Voter Registration" and select Form 6.',
        'Fill in your personal details: name, date of birth, address, and constituency.',
        'Upload scanned copies of your documents and photograph.',
        'Submit the form. You will receive a reference number.',
        'A Booth Level Officer (BLO) may visit your address for verification.',
        'Once verified, your name will be added to the electoral roll.',
        'Download the Voter Helpline App to check your status anytime.',
      ],
    },
    offline: {
      title: 'Offline Method',
      steps: [
        'Obtain Form 6 from the nearest Electoral Registration Office or download it from eci.gov.in.',
        'Fill in the form by hand in block letters.',
        'Attach photocopies of your age and address proof.',
        'Paste a recent passport-size photograph on the form.',
        'Submit the form in person at the Electoral Registration Office of your constituency.',
        'Collect the acknowledgement receipt.',
        'A BLO will visit your address for verification.',
        'Check the final electoral roll when it is published to confirm your name.',
      ],
    },
  },

  specialCategories: {
    heading: 'Special Voter Categories',
    categories: [
      {
        name: 'Overseas Voters (NRI)',
        form: 'Form 6A',
        description:
          'Indian citizens living abroad can register using Form 6A. You must hold a valid Indian passport. ' +
          'Overseas voters must be present in person at the polling station to vote.',
      },
      {
        name: 'Service Voters (Armed Forces)',
        form: 'Form 2',
        description:
          'Members of the armed forces, central para-military forces, and government officials posted abroad ' +
          'can register as service voters and are eligible for postal ballots.',
      },
      {
        name: 'Persons with Disabilities',
        form: 'Form 6',
        description:
          'Persons with disabilities use the same Form 6. Polling stations are required to have ramps and ' +
          'accessible facilities. You may request a companion to assist you inside the booth.',
      },
    ],
  },

  corrections: {
    heading: 'Need to Update Your Details?',
    forms: [
      { form: 'Form 8', purpose: 'Correct your name, address, photo, age, or other details on the electoral roll.' },
      { form: 'Form 8A', purpose: 'Transfer your registration within the same constituency (e.g., after moving house).' },
      { form: 'Form 7', purpose: 'Request removal of a name from the electoral roll (e.g., for a deceased relative).' },
    ],
  },

  disclaimer:
    '📌 Always verify the latest registration requirements and deadlines on your official Election Commission portal (voters.eci.gov.in) or call the Voter Helpline at 1950.',
};

module.exports = { VOTER_REGISTRATION_GUIDE };
