const { translateText } = require('../services/translateService');
const { z } = require('zod');

const translateSchema = z.object({
  text: z.string().min(1),
  targetLanguage: z.string().length(2)
});

const handleTranslate = async (req, res, next) => {
  try {
    const { text, targetLanguage } = translateSchema.parse(req.body);
    const translatedText = await translateText(text, targetLanguage);
    res.json({ translatedText });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleTranslate };
