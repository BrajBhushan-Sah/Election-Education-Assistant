// ═══════════════════════════════════════════════════════════════
//  Election Timeline — Static educational content
//  Source: Election Commission of India (eci.gov.in) process flow
//  NOTE: Dates are illustrative. Users must check official portal.
// ═══════════════════════════════════════════════════════════════

const ELECTION_TIMELINE = [
  {
    step: 1,
    phase: 'Election Notification',
    icon: '📢',
    summary: 'The Election Commission announces the election schedule.',
    details: [
      'The President or Governor dissolves the legislative body, or its term expires.',
      'The Election Commission issues a public notification with key dates.',
      'The Model Code of Conduct comes into effect immediately from the date of announcement.',
      'All political parties and candidates must follow the code from this point onward.',
    ],
    tip: 'You can check the official schedule at eci.gov.in or the Voter Helpline App.',
  },
  {
    step: 2,
    phase: 'Nomination of Candidates',
    icon: '📝',
    summary: 'Candidates file their nomination papers with the Returning Officer.',
    details: [
      'Candidates submit nomination forms along with a security deposit.',
      'Independent candidates and party candidates both follow the same process.',
      'The Returning Officer checks whether the nomination is valid.',
      'Other candidates or voters may raise objections during scrutiny.',
      'Candidates may withdraw their nomination before the last date of withdrawal.',
    ],
    tip: 'The list of contesting candidates is made public after the withdrawal date.',
  },
  {
    step: 3,
    phase: 'Campaigning Period',
    icon: '📣',
    summary: 'Candidates and parties campaign to reach voters.',
    details: [
      'Campaigns may include rallies, door-to-door visits, advertisements, and social media outreach.',
      'All campaign spending must stay within legal limits set by the Election Commission.',
      'The Election Commission monitors campaigns for violations of the Model Code of Conduct.',
      'Hate speech, bribery, use of religious or caste-based appeals, and misuse of government resources are prohibited.',
    ],
    tip: 'If you see a violation, you can report it using the cVIGIL app or by calling 1950.',
  },
  {
    step: 4,
    phase: 'Silence Period (48 hours)',
    icon: '🤫',
    summary: 'Campaigning stops 48 hours before polling begins.',
    details: [
      'No public rallies, loudspeakers, or campaign events are allowed.',
      'No new advertisements, posters, or social media campaign posts may be published.',
      'This period gives voters time to reflect and make their decision independently.',
      'Media coverage continues, but no opinion polls may be published.',
    ],
    tip: 'Use this time to confirm your polling station and check your voter ID.',
  },
  {
    step: 5,
    phase: 'Polling Day',
    icon: '🗳️',
    summary: 'Citizens cast their votes at designated polling stations.',
    details: [
      'Polling stations are open from 7:00 AM to 6:00 PM (times may vary by region).',
      'Voters must carry a valid photo ID (EPIC card, Aadhaar, passport, etc.).',
      'Booth Level Officers verify your name on the electoral roll.',
      'You enter a private booth and press the button next to your chosen symbol on the EVM.',
      'A VVPAT slip is displayed for 7 seconds so you can verify your vote.',
      'Indelible ink is applied to your left index finger as proof of voting.',
    ],
    tip: 'If you are in the queue before 6:00 PM, you are entitled to vote even if it takes longer.',
  },
  {
    step: 6,
    phase: 'Vote Counting',
    icon: '🔢',
    summary: 'Votes are counted under strict supervision.',
    details: [
      'Counting takes place on the date announced by the Election Commission, usually a few days after polling.',
      'EVMs are stored in secure strong rooms under 24/7 CCTV and multi-party seals until counting day.',
      'Counting is done round by round. Each round opens a fixed number of EVMs.',
      'Candidates and their counting agents are allowed to observe the process.',
      'VVPAT paper slips from randomly selected booths are matched against EVM results for verification.',
    ],
    tip: 'You can watch results live on the Election Commission website: results.eci.gov.in.',
  },
  {
    step: 7,
    phase: 'Results Declared',
    icon: '📊',
    summary: 'Winners are officially declared by the Returning Officer.',
    details: [
      'The candidate with the most votes in each constituency is declared the winner.',
      'India follows a First-Past-The-Post system — the candidate with the highest count wins, regardless of majority.',
      'Results are announced constituency by constituency.',
      'Defeated candidates may challenge results through an Election Petition filed in the High Court.',
    ],
    tip: 'Official results are published on the Election Commission portal.',
  },
  {
    step: 8,
    phase: 'Government Formation',
    icon: '🏛️',
    summary: 'The winning party or coalition forms the government.',
    details: [
      'The party or alliance with a majority of seats is invited to form the government.',
      'The leader of the majority party is typically sworn in as Prime Minister (central) or Chief Minister (state).',
      'If no single party has a majority, coalition negotiations take place.',
      'The new government must prove its majority on the floor of the legislature through a confidence vote.',
    ],
    tip: 'This step is part of constitutional procedure and is managed by the President or Governor.',
  },
];

module.exports = { ELECTION_TIMELINE };
