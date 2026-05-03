// Centralized constants for repeated values
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const ROUTES = {
  HOME: '/',
  LEARN: '/learn',
  CHAT: '/chat',
  QUIZ: '/quiz',
  DASHBOARD: '/dashboard',
  LOGIN: '/login'
};

export const UI_COLORS = {
  PRIMARY: '#FF9933', // Saffron
  SECONDARY: '#138808', // Green
  BACKGROUND: '#F5F5F5',
  TEXT_MAIN: '#333333'
};

export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 500,
  TYPING_DELAY_MS: 1500
};
