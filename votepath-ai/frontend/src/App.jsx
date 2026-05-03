// src/App.jsx
import { Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-center px-4">
        <div>
          <p className="text-4xl mb-4">⚠️</p>
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="text-slate-400 text-sm mb-4">{this.state.error.message}</p>
          <button onClick={() => this.setState({ error: null })} className="px-4 py-2 bg-brand-saffron rounded-lg text-sm">Try again</button>
        </div>
      </div>
    )
    return this.props.children
  }
}
import { AuthProvider, useAuth } from './context/AuthContext'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import ChatPage from './pages/ChatPage'
import TimelinePage from './pages/TimelinePage'
import FormFinderPage from './pages/FormFinderPage'
import QuizPage from './pages/QuizPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-saffron border-t-transparent rounded-full animate-spin" /></div>
  return user ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-slate-950 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/forms" element={<FormFinderPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </AppProvider>
    </ErrorBoundary>
  )
}
