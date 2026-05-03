# PromptWars Evaluation Map

This document maps the specific architectural requirements and best practices requested to their implementation in the `votepath-ai` codebase.

| Requirement | Implementation & File Mapping |
|-------------|-------------------------------|
| **Separate routes, controllers, services, validators, and middleware** | Implemented through the directory structure in `backend/src/`. Examples: <br/>- Routes: `routes/chat.routes.js` <br/>- Controllers: `controllers/chat.controller.js` <br/>- Services: `services/gemini.service.js` <br/>- Validators: `validators/chat.validator.js` <br/>- Middleware: `middleware/validate.middleware.js` |
| **No business logic inside route files** | `routes/chat.routes.js` only defines the HTTP verb, path, middleware, and attaches the controller. It performs no logic. |
| **Use reusable React components** | Implemented in `frontend/src/components/ChatAssistant.jsx`, which handles the chat UI logic independent of business context, making it highly reusable. |
| **Keep functions small** | Controllers (like `handleChatMessage`) and Services (like `generateResponse`) are designed to do exactly one thing, passing data cleanly between layers. |
| **Use constants for repeated values** | Centralized in `frontend/src/utils/constants.js` to avoid magic strings for routes, API endpoints, UI colors, and config values. |
| **Add comments only where useful** | Comments focus on architectural intent (e.g., explaining why a layer exists) and avoiding obvious line-by-line descriptions. |
| **Add centralized error handling** | The global error handler in `backend/src/middleware/error.middleware.js` catches all exceptions, normalizes them, and returns consistent JSON responses. We use a custom `AppError` class for operational errors. |
| **Add typed request validation using Zod or Joi** | Incoming requests are strongly typed using **Zod** schemas (e.g., `validators/chat.validator.js`) and intercepted automatically by our `validate.middleware.js`. |
| **Add meaningful file names** | All files have clear semantic names, grouping features logically (e.g., `chat.controller.js`, `error.middleware.js`). |
| **Add README and docs** | Fully documented in `README.md` and `docs/architecture.md`. |
