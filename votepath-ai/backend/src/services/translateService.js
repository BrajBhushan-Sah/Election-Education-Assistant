const { translate: googleTranslate } = require('../config/googleConfig');

const translateText = async (text, targetLanguage) => {
  const [translation] = await googleTranslate.translate(text, targetLanguage);
  return translation;
};

module.exports = { translateText };
