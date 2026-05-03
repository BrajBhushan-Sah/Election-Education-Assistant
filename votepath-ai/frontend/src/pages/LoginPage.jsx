// src/pages/LoginPage.jsx
import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

export default function LoginPage() {
  const { user, loading, error, clearError, loginWithGoogle, loginWithEmail, registerWithEmail } = useAuth()
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-950"><Spinner size="lg" /></div>
  if (user) return <Navigate to="/dashboard" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (mode === 'login') await loginWithEmail(email, password)
    else await registerWithEmail(email, password)
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-heading font-bold text-2xl text-white focus-visible:outline-brand-saffron">
            <span className="text-3xl" aria-hidden="true">🗳️</span>
            <span className="gradient-text">VotePath AI</span>
          </Link>
          <p className="text-slate-400 text-sm mt-2">Neutral Election Education Assistant</p>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="tricolour-bar rounded-full mb-6" aria-hidden="true" />

          {/* Tab toggle */}
          <div className="flex rounded-xl overflow-hidden border border-slate-700 mb-6" role="tablist" aria-label="Authentication mode">
            {['login', 'register'].map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => { setMode(m); clearError() }}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors focus-visible:outline-brand-saffron capitalize ${
                  mode === m ? 'bg-brand-saffron text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          {/* Google Sign-In */}
          <button
            onClick={loginWithGoogle}
            disabled={submitting}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all focus-visible:outline-brand-saffron disabled:opacity-50 mb-5"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none">
              <path d="M17.64 9.2045c0-.638-.0572-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2583h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.6152z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.4673-.8059 5.9564-2.1818l-2.9087-2.2583c-.8059.54-1.8368.8591-3.0477.8591-2.3441 0-4.3282-1.5832-5.036-3.7105H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.4136 5.4136 0 0 1 3.6818 9c0-.5945.1023-1.1727.2823-1.71V4.9582H.9574A8.9961 8.9961 0 0 0 0 9c0 1.4523.3477 2.8259.9574 4.0418L3.964 10.71z" fill="#FBBC05"/>
              <path d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9574 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5" aria-hidden="true">
            <div className="flex-1 h-px bg-slate-700" />
            <span className="text-xs text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-700" />
          </div>

          {/* Email/Password form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-4 mb-5">
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5 font-medium">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus:border-brand-saffron/50 focus-visible:outline-brand-saffron text-sm placeholder-slate-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-slate-300 mb-1.5 font-medium">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus:border-brand-saffron/50 focus-visible:outline-brand-saffron text-sm placeholder-slate-500"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>
            </div>

            <ErrorAlert message={error} onDismiss={clearError} />

            <button
              type="submit"
              disabled={submitting || !email || !password}
              className="w-full mt-4 py-3.5 bg-brand-saffron hover:bg-brand-saffron-dark text-white font-semibold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] focus-visible:outline-brand-saffron flex items-center justify-center gap-2"
            >
              {submitting ? <Spinner size="sm" label="Signing in" /> : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            By signing in, you agree that VotePath AI is for civic education only and is not affiliated with any political party.
          </p>
        </div>
      </div>
    </div>
  )
}
