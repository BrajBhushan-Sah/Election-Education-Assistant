const { db } = require('../config/googleConfig');

const getUserProgress = async (userId) => {
  const doc = await db.collection('users').doc(userId).get();
  return doc.exists ? doc.data() : { completedModules: [], quizScores: [] };
};

const updateUserProgress = async (userId, progressData) => {
  await db.collection('users').doc(userId).set(progressData, { merge: true });
};

const saveQuizResult = async (userId, quizResult) => {
  await db.collection('users').doc(userId).collection('quiz_results').add({
    ...quizResult,
    timestamp: new Date()
  });
};

module.exports = { getUserProgress, updateUserProgress, saveQuizResult };
