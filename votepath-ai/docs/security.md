# VotePath AI Security Implementation

This document details the security measures implemented in VotePath AI to ensure data integrity and protect against common vulnerabilities.

## 🔒 Backend Security

### 🛡️ API Security
- **Rate Limiting**: Implemented using `express-rate-limit`. We limit each IP to 100 requests every 15 minutes to prevent DDoS and brute-force attacks.
- **Helmet**: Used to set various HTTP headers for security (XSS protection, Clickjacking protection, etc.).
- **CORS**: Configured to only allow requests from the authorized `FRONTEND_URL`.

### 🧪 Data Validation
- **Zod**: Every incoming request to critical endpoints (like `/api/chat`) is validated against a strict schema. This prevents injection of malicious payloads and ensures data consistency.

### 🔑 Authentication & Authorization
- **Firebase Admin SDK**: Used to manage secure access to Firestore and other cloud resources.
- **Auth Middleware**: A centralized `authMiddleware.js` is used to protect sensitive routes (e.g., Progress Tracking).

### 🤖 AI Safety
- **Prompt Injection Mitigation**: System prompts are designed to strictly enforce a "neutral election assistant" persona.
- **Content Filtering**: We leverage Google's built-in safety settings for the Gemini API to filter out harmful or biased content.

## 🌐 Frontend Security

### 🧩 Environment Variables
- Sensitive keys are stored in `.env` and prefixed with `VITE_`. They are only exposed to the client-side code during the build process.

### 🛡️ Secure Rendering
- **React-Markdown**: Used for rendering AI responses with proper sanitization to prevent XSS attacks.

## ☁️ Cloud Security

### 📁 Google Cloud Platform
- **Service Accounts**: Access to Google Cloud Storage and Translation APIs is managed via scoped Service Account JSON keys.
- **GCS Permissions**: Storage buckets are configured with restricted access, ensuring only the backend service can write/read sensitive files.

### 🔥 Firebase
- **Security Rules**: Firestore rules are defined in `firestore.rules` to ensure users can only read/write their own progress data.
