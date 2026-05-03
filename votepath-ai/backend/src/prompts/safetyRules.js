// ═══════════════════════════════════════════════════════════════
//  Safety Refusal Rules — Input screening before Gemini call
//  These run BEFORE the message reaches the model so we don't
//  waste API quota on clearly out-of-scope requests.
// ═══════════════════════════════════════════════════════════════

/**
 * Phrases that strongly signal a partisan or out-of-scope request.
 * All matched case-insensitively.
 */
const BLOCKED_PATTERNS = [
  // Asking the AI to endorse or oppose
  /who should i vote for/i,
  /which party is (the )?(best|better|worst|good|bad)/i,
  /should i vote for (.+)/i,
  /convince me to vote for/i,
  /write (a |an )?(campaign|election) (speech|slogan|poster|ad)/i,
  /create propaganda/i,
  /make a poster (for|against)/i,

  // Prediction & opinion polls
  /who will win/i,
  /predict the (election|result|outcome)/i,
  /election forecast/i,
  /what are the chances of (.+) winning/i,
  /opinion poll/i,

  // Evaluative commentary on parties/candidates
  /is (.+) a good (leader|minister|candidate)/i,
  /rate (the |this )?(government|party|candidate)/i,
  /what do you think (of|about) (.+) (party|government|minister)/i,
  /compare (.+) (party|government) (with|to|and)/i,

  // Misinformation & deepfakes
  /fake news about/i,
  /generate (fake|false) (news|information|report)/i,
  /deepfake/i,
  /fabricate (evidence|proof|story)/i,
];

/**
 * The standard refusal message — warm, brief, and redirecting.
 */
const REFUSAL_MESSAGE =
  "I'm here to help you understand the election process — not to share opinions on parties or candidates. " +
  "That's a personal choice every voter makes independently. " +
  "Is there something about voter registration, polling-day steps, or election timelines I can help you with?";

/**
 * Screens user input against blocked patterns.
 * Returns { blocked: true, message } if the input triggers a rule,
 * or { blocked: false } if the input is safe to forward to Gemini.
 */
function screenInput(userMessage) {
  const trimmed = (userMessage || '').trim();

  if (!trimmed) {
    return { blocked: true, message: 'Please type a question about the election process and I will do my best to help.' };
  }

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { blocked: true, message: REFUSAL_MESSAGE };
    }
  }

  return { blocked: false };
}

module.exports = { screenInput, REFUSAL_MESSAGE, BLOCKED_PATTERNS };
