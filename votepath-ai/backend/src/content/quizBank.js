// ═══════════════════════════════════════════════════════════════
//  Quiz Question Bank — Neutral civic education questions
//  50 multiple-choice questions across 5 categories.
//  All questions test factual election process knowledge ONLY.
//  No question mentions any party, candidate, or ideology.
// ═══════════════════════════════════════════════════════════════

const QUIZ_CATEGORIES = [
  'Voter Registration',
  'Voting Day Procedures',
  'Election Commission & Roles',
  'Electoral Roll & EVM',
  'Model Code of Conduct & Rules',
];

const QUIZ_BANK = [
  // ── Category 1: Voter Registration ───────────────────────
  {
    category: 'Voter Registration',
    question: 'What is the minimum age to register as a voter in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    correctAnswerIndex: 1,
    explanation: 'Under Article 326 of the Constitution, every citizen who is 18 years of age or older is eligible to be registered as a voter.',
  },
  {
    category: 'Voter Registration',
    question: 'Which form is used to register as a new voter in India?',
    options: ['Form 2', 'Form 6', 'Form 7', 'Form 8'],
    correctAnswerIndex: 1,
    explanation: 'Form 6 is the application for inclusion of name in the electoral roll for first-time voters.',
  },
  {
    category: 'Voter Registration',
    question: 'Which form is used by overseas Indian citizens to register as voters?',
    options: ['Form 6', 'Form 6A', 'Form 7', 'Form 8A'],
    correctAnswerIndex: 1,
    explanation: 'Form 6A is specifically for Indian citizens residing abroad who hold a valid Indian passport.',
  },
  {
    category: 'Voter Registration',
    question: 'What is the official portal for online voter registration in India?',
    options: ['vote.india.gov.in', 'voters.eci.gov.in', 'registration.eci.in', 'indianvoter.com'],
    correctAnswerIndex: 1,
    explanation: 'The National Voter Service Portal at voters.eci.gov.in is the official platform for voter registration.',
  },
  {
    category: 'Voter Registration',
    question: 'Which form is used to correct personal details on the electoral roll?',
    options: ['Form 6', 'Form 7', 'Form 8', 'Form 11'],
    correctAnswerIndex: 2,
    explanation: 'Form 8 is used to request correction of entries such as name, address, age, or photograph.',
  },
  {
    category: 'Voter Registration',
    question: 'Who is a Booth Level Officer (BLO)?',
    options: [
      'A politician assigned to a booth',
      'A government official responsible for maintaining the voter list at the booth level',
      'A volunteer from a political party',
      'A police officer guarding the polling booth',
    ],
    correctAnswerIndex: 1,
    explanation: 'BLOs are local government officials who maintain electoral rolls and assist voters in their jurisdiction.',
  },
  {
    category: 'Voter Registration',
    question: 'What is the qualifying date for determining voter age eligibility?',
    options: ['Date of application', 'January 1 of the year of revision', 'April 15 of each year', 'Election Day'],
    correctAnswerIndex: 1,
    explanation: 'A person must have turned 18 on or before January 1 of the year of electoral roll revision to be eligible.',
  },
  {
    category: 'Voter Registration',
    question: 'Which form is used to request deletion of a name from the electoral roll?',
    options: ['Form 6', 'Form 7', 'Form 8', 'Form 8A'],
    correctAnswerIndex: 1,
    explanation: 'Form 7 is used to object to an entry or request removal of a name (e.g., of a deceased family member).',
  },
  {
    category: 'Voter Registration',
    question: 'What is EPIC?',
    options: [
      'Electoral Photo Identity Card',
      'Electronic Polling Identity Certificate',
      'Election Process Information Card',
      'Electronic Photo ID Counter',
    ],
    correctAnswerIndex: 0,
    explanation: 'EPIC stands for Electoral Photo Identity Card, commonly known as the voter ID card.',
  },
  {
    category: 'Voter Registration',
    question: 'Can a person be registered in more than one constituency at the same time?',
    options: ['Yes, up to 2 constituencies', 'Yes, if they own property in both', 'No, registration is allowed in only one constituency', 'Yes, with special permission'],
    correctAnswerIndex: 2,
    explanation: 'A person can be registered as a voter in only one constituency at a time.',
  },

  // ── Category 2: Voting Day Procedures ────────────────────
  {
    category: 'Voting Day Procedures',
    question: 'What is applied to a voter\'s finger after casting their vote?',
    options: ['Stamp ink', 'Indelible ink', 'Thermal dye', 'Regular pen ink'],
    correctAnswerIndex: 1,
    explanation: 'Indelible ink is applied to the left index finger to prevent duplicate voting. It lasts several days.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'On which finger is indelible ink typically applied?',
    options: ['Right thumb', 'Right index finger', 'Left index finger', 'Left thumb'],
    correctAnswerIndex: 2,
    explanation: 'Indelible ink is applied to the nail and cuticle of the left index finger.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'What does NOTA stand for?',
    options: [
      'National Organization for Transparent Administration',
      'None of the Above',
      'No Opinion to Announce',
      'New Option for Transparent Action',
    ],
    correctAnswerIndex: 1,
    explanation: 'NOTA (None of the Above) is a ballot option allowing voters to formally reject all contesting candidates.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'If a voter is in the queue when the polling station officially closes, what happens?',
    options: [
      'They are asked to leave and come back next time',
      'They are allowed to cast their vote',
      'They are given a postal ballot',
      'Their vote is disqualified',
    ],
    correctAnswerIndex: 1,
    explanation: 'Any voter who is in the queue before the official closing time is entitled to cast their vote.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'What is a Tendered Vote?',
    options: [
      'A vote cast by post',
      'A vote cast when someone has already voted in your name',
      'A vote given to a candidate who withdrew',
      'A vote for NOTA',
    ],
    correctAnswerIndex: 1,
    explanation: 'If you arrive to vote and find that someone has already voted using your identity, you can demand a Tendered Vote to record your actual choice.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'Are voters allowed to carry mobile phones inside the voting booth?',
    options: ['Yes, for all voters', 'Only if they need to look up candidate info', 'No, mobile phones are not allowed inside the booth', 'Only for senior citizens'],
    correctAnswerIndex: 2,
    explanation: 'Mobile phones and cameras are not permitted inside the voting booth to protect vote secrecy.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'How long is the VVPAT slip displayed for voter verification?',
    options: ['3 seconds', '5 seconds', '7 seconds', '10 seconds'],
    correctAnswerIndex: 2,
    explanation: 'The VVPAT slip showing the candidate name and symbol is displayed behind a transparent window for 7 seconds.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'What should you do if the EVM malfunctions when you try to vote?',
    options: [
      'Leave without voting',
      'Inform the Presiding Officer — you are entitled to a fresh vote',
      'Try pressing the button again',
      'Use a paper ballot instead',
    ],
    correctAnswerIndex: 1,
    explanation: 'If the EVM malfunctions, the Presiding Officer will arrange a replacement and you are entitled to cast your vote.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'Which of these is a valid photo ID for voting in India?',
    options: [
      'Only the EPIC voter ID card',
      'EPIC, Aadhaar, passport, PAN card, or driving licence',
      'Only Aadhaar card',
      'Any photo with your name on it',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Election Commission accepts multiple government-issued photo IDs including EPIC, Aadhaar, passport, PAN, and driving licence.',
  },
  {
    category: 'Voting Day Procedures',
    question: 'What is the purpose of the Voter Helpline number 1950?',
    options: [
      'To file police complaints',
      'To get election-related information and assistance',
      'To register complaints against candidates',
      'To check election results',
    ],
    correctAnswerIndex: 1,
    explanation: 'Helpline 1950 provides voters with information about their registration status, polling station, and general election assistance.',
  },

  // ── Category 3: Election Commission & Roles ──────────────
  {
    category: 'Election Commission & Roles',
    question: 'What is the full name of India\'s election authority?',
    options: [
      'Indian Election Bureau',
      'Election Commission of India',
      'National Election Authority',
      'Central Voting Commission',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Election Commission of India (ECI) is the constitutional body responsible for administering elections.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'Under which Article of the Indian Constitution is the Election Commission established?',
    options: ['Article 280', 'Article 324', 'Article 356', 'Article 370'],
    correctAnswerIndex: 1,
    explanation: 'Article 324 of the Constitution vests the superintendence, direction, and control of elections in the Election Commission.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'How many members can the Election Commission of India have?',
    options: [
      'Only 1 (the Chief Election Commissioner)',
      'Up to 3 (1 CEC + 2 Election Commissioners)',
      'Up to 5',
      'No fixed number',
    ],
    correctAnswerIndex: 1,
    explanation: 'The ECI consists of the Chief Election Commissioner and up to two Election Commissioners appointed by the President.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'Who is the Returning Officer in an election?',
    options: [
      'The head of a political party',
      'An officer appointed to manage the election process in a constituency',
      'A Supreme Court judge who oversees elections',
      'The Chief Minister of the state',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Returning Officer is responsible for managing the election in a specific constituency — from nominations to result declaration.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'What is the cVIGIL app used for?',
    options: [
      'Online voter registration',
      'Reporting election-related violations',
      'Checking election results',
      'Downloading voter ID',
    ],
    correctAnswerIndex: 1,
    explanation: 'cVIGIL is a citizen app for reporting violations of the Model Code of Conduct during elections with photo/video evidence.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'Which body conducts elections to local bodies (municipalities and panchayats)?',
    options: [
      'Election Commission of India',
      'State Election Commission',
      'District Magistrate',
      'Home Ministry',
    ],
    correctAnswerIndex: 1,
    explanation: 'State Election Commissions, established under Article 243K, conduct elections to local self-government bodies.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'What does the Presiding Officer do at a polling station?',
    options: [
      'Campaigns for a candidate',
      'Manages the polling station and ensures smooth voting',
      'Counts the votes',
      'Declares the final result',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Presiding Officer is in charge of the polling station, managing the voting process, security, and fair conduct.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'Can the Election Commission postpone an election?',
    options: [
      'No, elections can never be postponed',
      'Yes, if polling cannot take place due to natural disaster, violence, or other extraordinary reasons',
      'Only the Supreme Court can postpone elections',
      'Only the Prime Minister can postpone elections',
    ],
    correctAnswerIndex: 1,
    explanation: 'The ECI has the constitutional power to postpone or reschedule elections if circumstances make free and fair polling impossible.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'What is a polling agent?',
    options: [
      'A government officer at the booth',
      'A representative appointed by a candidate to observe voting at a polling station',
      'A voter who volunteers to help',
      'A media reporter covering the election',
    ],
    correctAnswerIndex: 1,
    explanation: 'Polling agents are appointed by candidates to ensure that voting at a station is conducted fairly and to flag any irregularities.',
  },
  {
    category: 'Election Commission & Roles',
    question: 'Who appoints the Chief Election Commissioner of India?',
    options: ['Prime Minister', 'Parliament', 'President of India', 'Supreme Court'],
    correctAnswerIndex: 2,
    explanation: 'The Chief Election Commissioner is appointed by the President of India.',
  },

  // ── Category 4: Electoral Roll & EVM ─────────────────────
  {
    category: 'Electoral Roll & EVM',
    question: 'What is an electoral roll?',
    options: [
      'A list of election dates',
      'A list of candidates contesting an election',
      'A register of all persons eligible to vote in a constituency',
      'A record of election results',
    ],
    correctAnswerIndex: 2,
    explanation: 'The electoral roll is the official list of all registered voters in a constituency.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'What does EVM stand for?',
    options: [
      'Electronic Voting Machine',
      'Election Verification Method',
      'Electronic Voter Module',
      'Election Vote Manager',
    ],
    correctAnswerIndex: 0,
    explanation: 'EVM stands for Electronic Voting Machine, used in Indian elections since the 1990s.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'How many votes can a single EVM record?',
    options: ['500', '1,000', '2,000', '5,000'],
    correctAnswerIndex: 2,
    explanation: 'A single EVM can record a maximum of 2,000 votes.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'What does VVPAT stand for?',
    options: [
      'Voter Verified Paper Audit Trail',
      'Verified Voting Process and Technology',
      'Visual Voter Participation and Tracking',
      'Vote Verification and Processing Tool',
    ],
    correctAnswerIndex: 0,
    explanation: 'VVPAT prints a paper slip for each vote so the voter can verify that their choice was correctly recorded.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'Can an EVM be connected to the internet?',
    options: [
      'Yes, it transmits results online',
      'No, EVMs are standalone machines with no network connectivity',
      'Only during counting',
      'Only the Control Unit can connect',
    ],
    correctAnswerIndex: 1,
    explanation: 'EVMs are standalone, battery-operated devices with no network connectivity — they cannot be hacked remotely.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'How many parts does an EVM have?',
    options: ['1', '2 (Control Unit + Ballot Unit)', '3', '4'],
    correctAnswerIndex: 1,
    explanation: 'An EVM consists of two parts: the Control Unit (operated by the Presiding Officer) and the Ballot Unit (used by the voter).',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'From how many randomly selected booths are VVPAT slips matched with EVM results?',
    options: ['1 per constituency', '3 per constituency', '5 per constituency', '10 per constituency'],
    correctAnswerIndex: 2,
    explanation: 'The Supreme Court of India mandated that VVPAT verification be done for 5 randomly selected polling stations per constituency.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'What happens to an EVM after polling ends?',
    options: [
      'It is destroyed',
      'It is sealed and stored in a secure strong room until counting day',
      'It is sent back to the manufacturer',
      'It is handed over to the winning candidate',
    ],
    correctAnswerIndex: 1,
    explanation: 'After polling, EVMs are sealed in the presence of party agents and stored in strong rooms under 24/7 security.',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'Who manufactures EVMs used in Indian elections?',
    options: [
      'A private company',
      'Bharat Electronics Limited (BEL) and Electronics Corporation of India Limited (ECIL)',
      'The Election Commission has its own factory',
      'They are imported from abroad',
    ],
    correctAnswerIndex: 1,
    explanation: 'EVMs are manufactured by two public sector undertakings: BEL (Bangalore) and ECIL (Hyderabad).',
  },
  {
    category: 'Electoral Roll & EVM',
    question: 'What is the "First Past The Post" (FPTP) system?',
    options: [
      'The candidate who gets more than 50% of votes wins',
      'The candidate with the highest number of votes wins, regardless of majority',
      'Voters rank candidates in order of preference',
      'Two rounds of voting are held if no one gets a majority',
    ],
    correctAnswerIndex: 1,
    explanation: 'India uses the FPTP system — the candidate with the most votes wins the seat, even without an absolute majority.',
  },

  // ── Category 5: Model Code of Conduct & Rules ────────────
  {
    category: 'Model Code of Conduct & Rules',
    question: 'When does the Model Code of Conduct come into effect?',
    options: [
      'On election day',
      'When the election schedule is announced',
      'One week before polling',
      'After nomination filing begins',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Model Code of Conduct takes effect immediately when the Election Commission announces the election schedule.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'What is the purpose of the Model Code of Conduct?',
    options: [
      'To set candidate salaries',
      'To ensure a level playing field and prevent misuse of power during elections',
      'To determine seat allocation',
      'To count votes',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Code prevents the ruling party from using government machinery for electoral advantage and ensures fair campaigning.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'How many hours before polling does the campaign silence period begin?',
    options: ['12 hours', '24 hours', '48 hours', '72 hours'],
    correctAnswerIndex: 2,
    explanation: 'All campaigning must stop 48 hours before polling begins to give voters time to make an independent choice.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'What is an Election Petition?',
    options: [
      'A request to the Election Commission to hold a new election',
      'A legal challenge to an election result filed in the High Court',
      'A letter to a candidate requesting their withdrawal',
      'A voter registration appeal',
    ],
    correctAnswerIndex: 1,
    explanation: 'An Election Petition is a formal legal challenge to election results, filed in the relevant High Court within 45 days.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'Which type of voting system does India use for Lok Sabha elections?',
    options: [
      'Proportional Representation',
      'First Past The Post',
      'Ranked Choice Voting',
      'Two-Round System',
    ],
    correctAnswerIndex: 1,
    explanation: 'India uses the First Past The Post (FPTP) system for Lok Sabha and State Assembly elections.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'Is appealing to voters on the basis of religion or caste allowed during campaigns?',
    options: [
      'Yes, it is a constitutional right',
      'No, it is a corrupt practice under election law',
      'Only if done respectfully',
      'Only political parties can do this',
    ],
    correctAnswerIndex: 1,
    explanation: 'Under Section 123 of the Representation of the People Act, appealing for votes on the basis of religion, race, caste, or language is a corrupt practice.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'Can a government announce new welfare schemes after the Model Code of Conduct begins?',
    options: [
      'Yes, the government can continue its work as usual',
      'No, new announcements that could influence voters are not allowed',
      'Only if the opposition agrees',
      'Only the central government is restricted',
    ],
    correctAnswerIndex: 1,
    explanation: 'The Code prohibits new policy announcements, financial grants, or welfare schemes that could influence voters.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'What is a by-election?',
    options: [
      'An election held if the main election is inconclusive',
      'An election held to fill a seat that has become vacant between general elections',
      'An election held in a newly created constituency',
      'A re-election ordered by the Supreme Court',
    ],
    correctAnswerIndex: 1,
    explanation: 'A by-election (bye-election) is held to fill a seat vacated due to death, resignation, or disqualification of the sitting member.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'What is the maximum campaign expenditure limit set by the Election Commission for a Lok Sabha candidate?',
    options: [
      'No limit exists',
      'It varies by state — typically between ₹70 lakh and ₹95 lakh',
      '₹10 lakh',
      '₹1 crore for all states',
    ],
    correctAnswerIndex: 1,
    explanation: 'The ECI sets expenditure limits that vary by state. Candidates must maintain detailed accounts and submit them within 30 days of results.',
  },
  {
    category: 'Model Code of Conduct & Rules',
    question: 'Can an employer refuse to give leave to an employee on polling day?',
    options: [
      'Yes, there is no legal requirement',
      'No, paid leave on polling day is mandated under the Representation of the People Act',
      'Only government employees get leave',
      'Only if the employer has fewer than 10 employees',
    ],
    correctAnswerIndex: 1,
    explanation: 'Section 135B of the RP Act, 1951, grants every employee paid leave on polling day and penalises employers who deny it.',
  },
];

/**
 * Get a random subset of questions, optionally filtered by category.
 * @param {number} count - Number of questions to return.
 * @param {string} [category] - Optional category filter.
 */
function getQuizQuestions(count = 5, category = null) {
  let pool = QUIZ_BANK;
  if (category && category !== 'All') {
    pool = QUIZ_BANK.filter((q) => q.category === category);
  }
  // Shuffle and take `count`
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q) => ({
    question: q.question,
    options: q.options,
    correctAnswerIndex: q.correctAnswerIndex,
    explanation: q.explanation,
  }));
}

module.exports = { QUIZ_BANK, QUIZ_CATEGORIES, getQuizQuestions };
