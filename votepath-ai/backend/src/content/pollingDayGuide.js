// ═══════════════════════════════════════════════════════════════
//  Polling Day Guide — What happens on voting day
// ═══════════════════════════════════════════════════════════════

const POLLING_DAY_GUIDE = {
  title: 'Your Polling Day — Step by Step',
  introduction:
    'Voting is a fundamental right and civic duty. This guide walks you through exactly what ' +
    'happens on polling day so you feel confident and prepared.',

  beforeYouGo: {
    heading: 'Before You Leave Home',
    checklist: [
      'Confirm your polling station location using the Voter Helpline App or voters.eci.gov.in.',
      'Carry a valid photo ID (EPIC/voter ID card, Aadhaar, passport, driving licence, PAN card, or other approved IDs).',
      'Check the polling hours for your region (typically 7:00 AM to 6:00 PM).',
      'Wear comfortable shoes — there may be a queue.',
      'Do not carry any campaign material, weapons, or electronic devices into the polling booth area.',
    ],
  },

  atThePollingStation: {
    heading: 'At the Polling Station',
    steps: [
      {
        step: 1,
        title: 'Queue and Entry',
        description:
          'Join the queue outside the polling station. Separate queues may be available for women, senior citizens, and persons with disabilities. ' +
          'If you are in the queue before the closing time, you are entitled to vote.',
      },
      {
        step: 2,
        title: 'Identity Verification',
        description:
          'Present your photo ID to the polling officer. They will check your name and details against the electoral roll. ' +
          'Your photo will be matched. If everything matches, you are cleared to proceed.',
      },
      {
        step: 3,
        title: 'Indelible Ink',
        description:
          'Indelible ink is applied to the cuticle of your left index finger. This mark prevents duplicate voting and typically lasts several days.',
      },
      {
        step: 4,
        title: 'Receiving the Ballot/EVM Slip',
        description:
          'The presiding officer will give you a slip and direct you to the voting booth. You proceed alone (or with an approved companion if you have a disability).',
      },
      {
        step: 5,
        title: 'Casting Your Vote',
        description:
          'Inside the private booth, you will see the Electronic Voting Machine (EVM) with a list of candidates and their symbols. ' +
          'Press the blue button next to the candidate of your choice. You will hear a beep and a light will glow, confirming your vote. ' +
          'The VVPAT machine beside the EVM will display a printed slip for 7 seconds showing your selected candidate and symbol.',
      },
      {
        step: 6,
        title: 'Exiting the Booth',
        description:
          'After voting, leave the polling booth quietly. Do not discuss your vote inside the polling station premises. ' +
          'Collect any personal belongings and exit.',
      },
    ],
  },

  importantRights: {
    heading: 'Your Rights as a Voter',
    rights: [
      'Your vote is secret. No one may ask you to reveal your choice.',
      'If the EVM malfunctions, you are entitled to a new vote.',
      'If you believe your identity has been misused (someone voted in your name), you can demand a Tendered Vote.',
      'You have the right to choose NOTA (None of the Above) if you do not wish to vote for any candidate.',
      'You may request help at the booth if you have a disability.',
      'You are entitled to paid leave from your employer on polling day (as per applicable laws).',
    ],
  },

  commonMistakes: {
    heading: 'Common Mistakes to Avoid',
    mistakes: [
      'Arriving without a valid photo ID — your voter ID slip alone may not be enough.',
      'Going to the wrong polling station — always verify your station in advance.',
      'Carrying a mobile phone into the booth — phones must be kept outside.',
      'Pressing multiple buttons on the EVM — only the first press is recorded.',
      'Discussing your vote inside the station — this is not allowed.',
    ],
  },

  disclaimer:
    '📌 Polling hours and procedures may vary by state and election type. Always confirm details on eci.gov.in or call 1950.',
};

module.exports = { POLLING_DAY_GUIDE };
