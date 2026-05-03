# VotePath AI Testing Guide

This project follows a test-driven approach to ensure stability across both the frontend and backend.

## 🧪 Backend Testing

We use **Jest** and **Supertest** for backend unit and integration testing.

### Running Tests
Navigate to the `backend` directory and run:
```bash
npm test
```

### Test Coverage
- **API Health**: Verifies that the server is up and responding.
- **Route Validation**: Ensures that endpoints correctly reject malformed data with a `400` status.
- **Service Logic**: Tests the core functionality of content delivery and quiz logic.
- **Safety Rules**: Ensures AI prompts and safety configurations are correctly applied.

---

## ⚛️ Frontend Testing

We use **Vitest** and **React Testing Library** for frontend testing.

### Running Tests
Navigate to the `frontend` directory and run:
```bash
npm test
# To run without watch mode:
npm test -- --run
```

### Test Coverage
- **Component Rendering**: Ensures all UI components (Navbar, Sidebar, Landing Page) render correctly.
- **API Integration**: Mocks backend responses to test frontend data handling.
- **Navigation**: Verifies that the routing works as expected between pages.

---

## 🛠️ Continuous Integration

Before every deployment or pull request, ensure:
1. All tests pass in both `frontend` and `backend`.
2. The project builds successfully (`npm run build` in the frontend).
