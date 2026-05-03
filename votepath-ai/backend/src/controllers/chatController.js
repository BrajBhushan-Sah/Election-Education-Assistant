const { generateAnswer } = require('../services/geminiService');
const { z } = require('zod');

const chatSchema = z.object({
  message: z.string().min(1),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    parts: z.string()
  })).optional()
});

const handleChat = async (req, res, next) => {
  try {
    const { message, history } = chatSchema.parse(req.body);
    const answer = await generateAnswer(message, history);
    res.json({ answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleChat };
