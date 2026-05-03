// ═══════════════════════════════════════════════════════════════
//  Counting & Results Guide — What happens after polling
// ═══════════════════════════════════════════════════════════════

const COUNTING_RESULTS_GUIDE = {
  title: 'How Votes Are Counted and Results Declared',
  introduction:
    'After polling ends, the votes are securely stored and later counted under strict supervision. ' +
    'This guide explains the counting process so you understand how your vote is transformed into a result.',

  storage: {
    heading: 'Secure Storage of EVMs',
    steps: [
      'Immediately after polling closes, the Presiding Officer seals each EVM in the presence of polling agents from all parties.',
      'Sealed EVMs are transported under security escort to a designated strong room.',
      "The strong room is locked with multiple seals — each political party's agent places their own seal.",
      'The strong room is guarded 24/7 by armed security forces and monitored by CCTV cameras.',
      'Candidates and their agents may post their own watchers outside the strong room.',
    ],
  },

  countingProcess: {
    heading: 'How Counting Works',
    steps: [
      {
        step: 1,
        title: 'Counting Day',
        description:
          'Counting takes place on the date fixed by the Election Commission, typically a few days after polling.',
      },
      {
        step: 2,
        title: 'Verification of Seals',
        description:
          'Before counting begins, the Returning Officer and party agents verify that all seals on the strong room and EVMs are intact and untampered.',
      },
      {
        step: 3,
        title: 'Round-by-Round Counting',
        description:
          'EVMs are opened in batches (rounds). After each round, the cumulative vote count for each candidate is announced and displayed publicly.',
      },
      {
        step: 4,
        title: 'Postal Ballot Counting',
        description:
          'Postal ballots (from service voters, senior citizens, persons with disabilities, and essential duty personnel) are counted first, before EVM counting begins.',
      },
      {
        step: 5,
        title: 'VVPAT Verification',
        description:
          'As mandated by the Supreme Court of India, VVPAT paper slips from 5 randomly selected polling stations in each constituency ' +
          'are matched against EVM results to ensure accuracy.',
      },
      {
        step: 6,
        title: 'Final Tally',
        description:
          'After all rounds are complete and VVPAT verification is done, the Returning Officer prepares the final tally sheet.',
      },
    ],
  },

  resultDeclaration: {
    heading: 'How Results Are Declared',
    steps: [
      'The candidate with the highest number of votes is declared the winner (First-Past-The-Post system).',
      'The Returning Officer issues a Certificate of Election to the winning candidate.',
      'If two candidates receive an equal number of votes, the result is decided by drawing lots.',
      'Results are published on the Election Commission portal: results.eci.gov.in.',
    ],
  },

  afterResults: {
    heading: 'What Happens After Results?',
    points: [
      'The party or alliance with a majority of seats in the legislature is invited to form the government.',
      'Defeated candidates may challenge the result by filing an Election Petition in the High Court within 45 days.',
      'The new legislature is convened and the government must prove its majority through a floor test.',
      'By-elections may be called for seats that fall vacant.',
    ],
  },

  nota: {
    heading: 'What About NOTA Votes?',
    explanation:
      'NOTA (None of the Above) allows voters to formally reject all candidates. ' +
      'NOTA votes are counted and reported but do not affect the result — the candidate with the most votes still wins, ' +
      'even if NOTA receives more votes. NOTA serves as a registered expression of dissatisfaction.',
  },

  disclaimer:
    '📌 Counting procedures are governed by the Conduct of Elections Rules, 1961. For authoritative details, visit eci.gov.in or call 1950.',
};

module.exports = { COUNTING_RESULTS_GUIDE };
