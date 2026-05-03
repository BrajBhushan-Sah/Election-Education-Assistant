# VotePath AI Architecture

The application is built using a modern decoupled architecture, ensuring a clean separation between the user interface and the business logic.

## 🏗️ Backend Architecture (Express.js)
- **Routes (`src/routes`)**: The entry points for all API calls. They define the paths and connect middleware to controllers.
- **Controllers (`src/controllers`)**: Responsible for handling the request/response lifecycle. They extract data from requests, perform **Zod validation**, and invoke services.
- **Services (`src/services`)**: The core engine of the application. They handle all complex logic, such as communicating with the Gemini AI model or querying Firestore.
- **Middleware (`src/middleware`)**: Handles cross-cutting concerns like security (Helmet), rate limiting, and centralized error handling.
- **Config (`src/config`)**: Centralized initialization for Google Cloud services and Firebase.
- **Content (`src/content`)**: A structured data layer containing the source material for the election guides and quiz bank.

## ⚛️ Frontend Architecture (React)
- **Pages (`src/pages`)**: Major views like the Dashboard, Chat Interface, and Learning Modules.
- **Components (`src/components`)**: Atomic, reusable UI elements (Buttons, Cards, Modals) styled with Tailwind CSS.
- **Context (`src/context`)**: Manages global application state, such as user progress and theme settings.
- **Services (`src/services`)**: Utility functions for making asynchronous requests to the backend API.
