# Google Cloud Services Configuration

VotePath AI leverages several Google Cloud and Firebase services. This document explains how to configure them.

## 🤖 Gemini AI (Google AI Studio)
1. Visit [Google AI Studio](https://aistudio.google.com/).
2. Generate an API Key.
3. Add this key to `backend/.env` as `GEMINI_API_KEY`.

## 🔥 Firebase Suite
1. Create a project at the [Firebase Console](https://console.firebase.google.com/).
2. **Firestore**: Enable Firestore in Native mode.
3. **Authentication**: Enable Google/Email auth if required.
4. **Project Config**: Copy the web app configuration into `frontend/.env`.

## ☁️ Google Cloud Storage (GCS)
1. In the Google Cloud Console, create a new Storage Bucket.
2. Ensure the bucket name matches `GCS_BUCKET_NAME` in `backend/.env`.
3. Set appropriate IAM permissions for the backend service account.

## 🌍 Google Cloud Translation API
1. Enable the **Cloud Translation API** in the Google Cloud Console.
2. Create a **Service Account** with the "Cloud Translation API User" role.
3. Download the JSON key and set its path in `backend/.env` as `GOOGLE_APPLICATION_CREDENTIALS`.
