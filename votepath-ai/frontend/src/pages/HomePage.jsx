// src/pages/HomePage.jsx
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const FEATURES = [
  { icon: '🤖', title: 'AI Chat Assistant', desc: 'Ask any question about elections and get a clear, neutral, factual answer.', link: '/chat' },
  { icon: '📚', title: 'Learning Modules', desc: 'Step-by-step civic education covering registration, voting, and more.', link: '/learn' },
  { icon: '📅', title: 'Election Timeline', desc: 'Track important dates — registration deadlines, early voting, election day.', link: '/timeline' },
  { icon: '📄', title: 'Form Finder', desc: 'Quickly find and download official voter registration forms.', link: '/forms' },
  { icon: '🧠', title: 'Civic Quiz', desc: 'Test your knowledge of the election process in an interactive quiz.', link: '/quiz' },
  { icon: '📊', title: 'Your Dashboard', desc: 'Track your learning progress and quiz scores in one place.', link: '/dashboard' },
]

const BADGES = ['🇮🇳 Neutral', '🔐 Secure', '♿ Accessible', '🌐 Multilingual']

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="hero-gradient relative overflow-hidden flex flex-col items-center justify-center text-center px-4 py-28 md:py-40"
        aria-labelledby="hero-heading"
      >
        {/* Decorative blobs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-brand-saffron/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <p className="text-brand-saffron text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
          Your Civic Education Companion
        </p>
        <h1 id="hero-heading" className="font-heading font-extrabold text-5xl md:text-7xl text-white leading-tight animate-slide-up">
          Understand Your<br />
          <span className="gradient-text">Vote. Your Voice.</span>
        </h1>
        <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-2xl animate-fade-in">
          VotePath AI is a 100% neutral, AI-powered guide to the election process.
          No opinions. No bias. Just facts.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in">
          {BADGES.map((b) => (
            <span key={b} className="glass px-4 py-1.5 rounded-full text-sm text-slate-200 font-medium">{b}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Link
            to="/chat"
            id="cta-chat"
            className="px-8 py-3.5 bg-brand-saffron hover:bg-brand-saffron-dark text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-saffron/30 hover:shadow-brand-saffron/50 hover:scale-105 focus-visible:outline-brand-saffron"
          >
            Chat with AI Assistant →
          </Link>
          <Link
            to="/learn"
            id="cta-learn"
            className="px-8 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-all focus-visible:outline-brand-saffron"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <PageWrapper>
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-white mb-2">
          Everything You Need to Vote
        </h2>
        <p className="text-center text-slate-400 mb-12">All the tools for informed civic participation in one place.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, desc, link }) => (
            <Link
              key={title}
              to={link}
              className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-brand-saffron/40 hover:bg-white/10 transition-all group focus-visible:outline-brand-saffron"
            >
              <span className="text-4xl" aria-hidden="true">{icon}</span>
              <h3 className="font-heading font-semibold text-xl text-white group-hover:text-brand-saffron transition-colors">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 rounded-2xl bg-brand-green/10 border border-brand-green/30 text-center">
          <p className="text-brand-green text-sm font-medium">
            ✅ VotePath AI is strictly non-partisan. It only provides factual information about election processes, registration, and civic education. It does not support any political party or candidate.
          </p>
        </div>
      </PageWrapper>
    </>
  )
}
