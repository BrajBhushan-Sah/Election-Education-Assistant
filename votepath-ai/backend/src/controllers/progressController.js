const { getUserProgress, updateUserProgress } = require('../services/dbService');

const getProgress = async (req, res, next) => {
  try {
    const userId = req.user.uid;
    const progress = await getUserProgress(userId);
    res.json(progress);
  } catch (error) {
    next(error);
  }
};

const updateProgress = async (req, res, next) => {
  try {
    const userId = req.user.uid;
    const progressData = req.body;
    await updateUserProgress(userId, progressData);
    res.json({ message: 'Progress updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProgress, updateProgress };
