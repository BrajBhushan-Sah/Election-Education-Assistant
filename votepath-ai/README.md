# VotePath AI

**VotePath AI** is a premium, AI-powered election education platform designed to provide neutral, factual, and accessible information about the electoral process. Built for the modern citizen, it simplifies complex election procedures into interactive learning experiences.

---

## Key Features

- **🤖 Neutral AI Assistant**: An intelligent chatbot powered by Google's Gemini Pro, trained to provide objective answers based on official election guidelines.
- **📚 Interactive Learning Modules**: Structured guides covering Voter Registration, Polling Day Procedures, and Counting/Results.
- **🌍 Multilingual Support**: Real-time translation of educational content into multiple regional languages using Google Cloud Translation API.
- **📝 Form Finder**: A dedicated section to help users find and understand official election forms.
- **🧠 Knowledge Quizzes**: Interactive quizzes to test and reinforce understanding of democratic processes.
- **🎨 Premium UI/UX**: A modern, responsive dashboard with dark mode support and smooth entrance animations.

---

## Technical Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Testing**: Vitest & React Testing Library
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js (Express)
- **AI Engine**: Google Gemini AI (`@google/generative-ai`)
- **Cloud Services**:
  - **Firebase Admin**: Firestore for data persistence and progress tracking.
  - **Google Cloud Storage**: For secure storage of election-related assets.
  - **Google Cloud Translation**: For on-the-fly content localization.
- **Security**: Helmet, CORS, and Express Rate Limit.
- **Validation**: Zod (Schema-based validation).

---

## Architecture

The project follows a modular **Controller-Service-Route** pattern to ensure scalability and maintainability:

- **Routes**: Define API endpoints and attach validation/authentication middleware.
- **Controllers**: Handle HTTP requests, parse inputs, and manage response formatting.
- **Services**: Contain the core business logic and external API integrations (Gemini, Firebase, etc.).
- **Middleware**: Centralized error handling, rate limiting, and security headers.
- **Content**: Static educational content is centralized in `src/content/` for easy updates.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- Google Cloud Service Account (for Translation & Storage)
- Gemini API Key (from Google AI Studio)
- Firebase Project

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BrajBhushan-Sah/Election-Education-.git
   cd Election-Education-/votepath-ai
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   # Create a .env file based on .env.example and fill in your secrets
   npm run dev
   ```

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   # Create a .env file and set VITE_API_BASE_URL
   npm run dev
   ```

---

## Environment Variables

### Backend (`/backend/.env`)
| Variable | Description |
| :--- | :--- |
| `PORT` | Server port (default 5000) |
| `GEMINI_API_KEY` | Google AI Studio API Key |
| `FIREBASE_PROJECT_ID` | Your Firebase Project ID |
| `GCS_BUCKET_NAME` | Google Cloud Storage Bucket Name |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to your service account JSON |

### Frontend (`/frontend/.env`)
| Variable | Description |
| :--- | :--- |
| `VITE_API_BASE_URL` | Base URL for the backend API |
| `VITE_FIREBASE_*` | Firebase client-side configuration keys |

---

## Security & Compliance
VotePath AI is built with security as a priority:
- **Rate Limiting**: Prevents API abuse and DDoS attacks.
- **Helmet**: Adds essential security headers.
- **CORS**: Restricted to authorized frontend origins.
- **Zod**: Ensures no malformed data reaches the service layer.

---

## License
This project is developed as part of the Election Education initiative. All rights reserved.
