// ═══════════════════════════════════════════════════════════════
//  Gemini Service — Uses the master system prompt + safety screen
// ═══════════════════════════════════════════════════════════════

const { geminiModel } = require('../config/googleConfig');
const { SYSTEM_PROMPT, SYSTEM_PROMPT_ACKNOWLEDGEMENT } = require('../prompts/systemPrompt');
const { screenInput } = require('../prompts/safetyRules');
const logger = require('../utils/logger');

/**
 * Generates a neutral, educational answer using Gemini.
 * 1. First screens input against blocked patterns (zero-cost).
 * 2. If safe, forwards to Gemini with the master system prompt.
 */
const generateAnswer = async (userMessage, history = []) => {
  // ── Step 1: Pre-model safety screen ─────────────────────
  const screening = screenInput(userMessage);
  if (screening.blocked) {
    logger.info('Safety screen blocked a query', { blocked: true, snippet: userMessage.slice(0, 80) });
    return screening.message;
  }

  // ── Step 2: Call Gemini with neutrality prompt ──────────
  try {
    const chat = geminiModel.startChat({
      history: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: SYSTEM_PROMPT_ACKNOWLEDGEMENT }] },
        ...(history || []).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.parts }]
        })),
      ],
    });

    const result = await chat.sendMessage([{ text: userMessage }]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    logger.error('Gemini API error', { message: error.message, stack: error.stack });
    throw error;
  }
};

module.exports = { generateAnswer };
