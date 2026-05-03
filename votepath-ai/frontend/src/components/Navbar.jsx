// src/components/Navbar.jsx
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/learn', label: 'Learn' },
  { to: '/chat', label: 'AI Chat' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/forms', label: 'Forms' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const { language, setLanguage, LANGUAGES, highContrast, setHighContrast, cycleFontSize, darkMode, setDarkMode } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
    setMenuOpen(false)
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-50 glass border-b border-white/10"
    >
      <div className="tricolour-bar" />
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-white focus-visible:outline-brand-saffron">
          <span className="text-2xl" aria-hidden="true">🗳️</span>
          <span className="gradient-text">VotePath AI</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-brand-saffron ${
                    isActive
                      ? 'bg-brand-saffron/20 text-brand-saffron'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <label htmlFor="lang-select" className="sr-only">Select language</label>
          <select
            id="lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus-visible:outline-brand-saffron hidden sm:block"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>

          {/* Font size */}
          <button
            onClick={cycleFontSize}
            aria-label="Cycle font size"
            title="Toggle font size"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-brand-saffron text-sm font-bold"
          >
            A+
          </button>

          {/* High contrast */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            aria-pressed={highContrast}
            aria-label="Toggle high contrast mode"
            title="High contrast"
            className={`p-2 rounded-lg transition-colors focus-visible:outline-brand-saffron text-sm ${highContrast ? 'bg-yellow-400 text-black' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
          >
            ◐
          </button>

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-brand-saffron"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Auth */}
          {user ? (
            <button
              onClick={handleLogout}
              className="hidden sm:block px-4 py-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 text-sm font-medium transition-colors focus-visible:outline-brand-saffron"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden sm:block px-4 py-1.5 rounded-lg bg-brand-saffron text-white hover:bg-brand-saffron-dark text-sm font-medium transition-colors focus-visible:outline-brand-saffron"
            >
              Login
            </Link>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-brand-saffron"
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span>
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-slate-900/95 backdrop-blur border-t border-white/10 px-4 pb-4 animate-fade-in"
        >
          <ul role="list" className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-brand-saffron ${
                      isActive ? 'bg-brand-saffron/20 text-brand-saffron' : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus-visible:outline-brand-saffron"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
            {user ? (
              <button onClick={handleLogout} className="px-4 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-sm font-medium">Logout</button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="px-4 py-1.5 rounded-lg bg-brand-saffron text-white text-sm font-medium">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
