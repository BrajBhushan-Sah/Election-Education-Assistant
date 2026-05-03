const admin = require('firebase-admin');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { Translate } = require('@google-cloud/translate').v2;
const { Storage } = require('@google-cloud/storage');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID
  });
}

const db = admin.firestore();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

// Initialize Translation API
const translate = new Translate();

// Initialize Cloud Storage
const storage = new Storage();
const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

module.exports = {
  admin,
  db,
  geminiModel,
  translate,
  bucket
};
