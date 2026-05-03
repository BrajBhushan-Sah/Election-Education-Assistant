# Election Guide Assistant — PromptWars 2026

A modern AI-powered civic education web application that helps users understand the **election process, voter registration, election timelines, polling day steps, vote counting, results, FAQs, and official resources** in a simple, interactive, and politically neutral way.

> Built for **PromptWars** with a focus on user-friendly election process education, responsible civic awareness, and accessible AI assistance.

---

## Problem Statement

**Election Process Education**  
Create an assistant that helps users understand the election process, timelines, and steps in an interactive and easy-to-follow way.

---

## Project Overview

Election Guide Assistant is designed to make election-related information easier to understand for first-time voters, students, and general citizens. The app combines an AI assistant, interactive learning sections, FAQs, official resources, and Firebase-based authentication to create a smooth civic education experience.

The assistant is strictly **politically neutral**. It does not support, oppose, promote, or recommend any political party, candidate, ideology, or voting choice. Its only goal is to explain the election process clearly and responsibly.

---

## Key Features

### AI Election Assistant
- Ask questions about voter registration, election steps, polling day, counting, and results.
- Uses Gemini API for intelligent responses.
- Designed with a neutral civic education system prompt.
- Refuses political recommendations and redirects users toward responsible comparison using verified information.

### Election Timeline
- Explains the election process step by step:
  1. Election schedule announcement
  2. Candidate nomination
  3. Scrutiny of nominations
  4. Withdrawal period
  5. Campaigning
  6. Polling day
  7. Secure storage
  8. Counting of votes
  9. Result declaration

### Voter Journey
- A beginner-friendly path for users:
  - Check eligibility
  - Register as a voter
  - Search name in voter list
  - Know polling station
  - Prepare identification
  - Cast vote responsibly

### FAQ Section
- Searchable FAQ section for common election-related questions.
- Covers voter registration, voter list, corrections, deletion, polling day, neutrality, and results.

### Quiz Module
- Interactive quiz to test election process knowledge.
- Shows feedback, explanations, score, and restart option.

### Official Resources
- Links to official election-related portals such as:
  - Voters’ Service Portal
  - Election Commission of India
  - SVEEP voter education resources

### Firebase Authentication
- Google sign-in support.
- Firebase project configuration through Vite environment variables.

### Google Cloud Storage Support
- Uses Google Cloud Storage/Firebase Storage bucket configuration for file/resource handling if enabled.

---

## Tech Stack

### Frontend
- React / Vite
- JavaScript / TypeScript depending on your setup
- Tailwind CSS or custom CSS
- Firebase Client SDK

### Backend
- Node.js / Express
- Gemini API
- Firebase Admin / Google Cloud integration
- Google Cloud Storage

### Cloud & APIs
- Firebase Authentication
- Firebase Storage / Google Cloud Storage
- Google Gemini API
- Google Cloud Service Account credentials

---

## Suggested Project Structure

```bash
promptwars_01/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── firebase.js
│   │   └── App.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

> Your actual structure may differ depending on what Antigravity generated.

---

## Environment Variables

This project uses separate environment variables for frontend and backend.

---

## Frontend `.env`

Create a `.env` file inside your frontend root folder, usually the same folder where `package.json` and `vite.config.js` are located.

```env
VITE_FIREBASE_API_KEY=your_firebase_web_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_web_app_id
VITE_API_BASE_URL=http://localhost:5000
```

### Where to get these values?

Go to:

```text
Firebase Console → Project Settings → General → Your apps → Web app config
```

Copy the Firebase config object and map it like this:

```js
apiKey            → VITE_FIREBASE_API_KEY
authDomain        → VITE_FIREBASE_AUTH_DOMAIN
projectId         → VITE_FIREBASE_PROJECT_ID
storageBucket     → VITE_FIREBASE_STORAGE_BUCKET
messagingSenderId → VITE_FIREBASE_MESSAGING_SENDER_ID
appId             → VITE_FIREBASE_APP_ID
```

---

## Backend `.env`

Create a `.env` file inside your backend root folder.

```env
PORT=5000
FRONTEND_URL=http://localhost:5173

GEMINI_API_KEY=your_gemini_api_key

FIREBASE_PROJECT_ID=your_project_id
GCS_BUCKET_NAME=your_project_id.firebasestorage.app
GOOGLE_APPLICATION_CREDENTIALS="C:/path/to/your/service-account.json"
```

### Important Notes

- `GEMINI_API_KEY` should be kept only in the backend.
- `GOOGLE_APPLICATION_CREDENTIALS` should point to your local Google Cloud service account JSON file.
- Never commit `.env` files or service account JSON files to GitHub.
- If you accidentally expose an API key, rotate/delete it immediately and create a new one.

---

## Security Checklist

Before pushing to GitHub, make sure your `.gitignore` includes:

```gitignore
.env
.env.local
.env.*.local
*.json
node_modules/
dist/
build/
.DS_Store
```

Do **not** upload:

```text
Firebase service account JSON
Google Cloud credential JSON
Gemini API key
Backend .env file
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/promptwars_01.git
cd promptwars_01
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will usually run on:

```text
http://localhost:5173
```

---

## Backend Setup

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

Backend will usually run on:

```text
http://localhost:5000
```

---

## Firebase Setup

1. Go to Firebase Console.
2. Create or select your Firebase project.
3. Add a Web App.
4. Copy the Firebase config into your frontend `.env`.
5. Go to Authentication.
6. Enable Google sign-in provider.
7. Add authorized domains:
   - `localhost`
   - your deployed domain

---

## Google Cloud Setup

### Service Account

1. Open Google Cloud Console.
2. Go to `IAM & Admin → Service Accounts`.
3. Create a service account.
4. Assign the required role, for example:
   - `Storage Object Admin` for bucket file access
   - `Storage Admin` for development/demo use
5. Open the service account.
6. Go to `Keys → Add Key → Create new key`.
7. Choose JSON and download the file.
8. Set the file path in backend `.env`:

```env
GOOGLE_APPLICATION_CREDENTIALS="C:/path/to/service-account.json"
```

---

## Gemini API Setup

1. Open Google AI Studio.
2. Create a Gemini API key.
3. Add it to backend `.env`:

```env
GEMINI_API_KEY=your_gemini_api_key
```

4. Restart the backend server.

---

## App Flow

```text
User opens app
      ↓
User signs in with Firebase Auth
      ↓
User asks election-related question
      ↓
Frontend sends request to backend
      ↓
Backend sends prompt to Gemini API
      ↓
Gemini returns neutral civic education answer
      ↓
Frontend displays response in assistant UI
```

---

## Neutrality Policy

This project follows strict political neutrality:

- It does not recommend candidates.
- It does not support or oppose political parties.
- It does not generate campaign material.
- It does not influence voting choices.
- It explains only election processes, timelines, forms, steps, and verified civic information.

If a user asks whom to vote for, the assistant should respond:

```text
I cannot recommend any candidate, party, or political choice. I can help you compare candidates responsibly using official information, manifestos, public records, and verified sources.
```

## Deployment

### Frontend Deployment Options

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages

### Backend Deployment Options

- Render
- Railway
- Google Cloud Run
- Firebase Functions
- Vercel Serverless Functions

### Production Notes

For production:

- Keep Gemini API key in backend only.
- Do not expose service account JSON in frontend.
- Use environment variables from your hosting provider.
- Add deployed frontend domain to Firebase authorized domains.
- Restrict API keys where possible.

---

## Future Improvements

- Multilingual support: English, Hindi, Bengali
- Voice-based election assistant
- PWA install support
- Admin dashboard for FAQ/resource updates
- More advanced quiz levels
- Real-time official election updates
- Better accessibility for screen readers
- Progress tracking for first-time voters
- Offline learning cards

---

## PromptWars Submission Highlights

- AI-powered election process assistant
- Civic education focused design
- Political neutrality by design
- Firebase authentication
- Google Cloud integration
- Beginner-friendly and accessible UI
- Interactive timeline, quiz, FAQ, and resources
- Scalable full-stack architecture

---

## Author

**Brajbhushan Sah**  
Project: `promptwars_01`  
Built for: **PromptWars**

---

## License

This project is open-source and available under the **MIT License**.

---

## Support

If you like this project, consider giving it a star on GitHub.

```text
Your vote matters. Your understanding matters too.
```
