// src/pages/TimelinePage.jsx
import PageWrapper from '../components/PageWrapper'

const EVENTS = [
  { date: 'Jan 1 – Mar 31', label: 'Voter Roll Verification', desc: 'Election Commission verifies and updates electoral rolls. Citizens can check or update their registration.', color: 'bg-brand-saffron', done: true },
  { date: 'Apr 15', label: 'Registration Deadline', desc: 'Last date for new voters to complete registration for the upcoming election.', color: 'bg-yellow-400', done: true },
  { date: 'Apr 20', label: 'Candidate Nominations', desc: 'Political parties and independent candidates file nomination papers.', color: 'bg-blue-400', done: false },
  { date: 'Apr 25', label: 'Campaigning Period', desc: 'Official campaigning period begins. Candidates conduct rallies, debates, and outreach.', color: 'bg-purple-400', done: false },
  { date: 'May 10', label: 'Campaigning Ends (48hrs before)', desc: 'Model Code of Conduct silence period. No campaigning within 48 hours of voting.', color: 'bg-red-400', done: false },
  { date: 'May 12', label: '🗳️ Election Day', desc: 'Polling booths open from 7 AM to 6 PM. All registered voters can cast their vote.', color: 'bg-brand-green', done: false },
  { date: 'May 15', label: 'Vote Counting', desc: 'Official counting of ballots. Results are announced after verification.', color: 'bg-emerald-400', done: false },
]

export default function TimelinePage() {
  return (
    <PageWrapper>
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
        📅 Election Timeline
      </h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        Key dates and milestones in the election cycle. Dates shown are illustrative examples — always verify with your official election authority.
      </p>

      <div className="relative">
        <ol className="flex flex-col gap-0" aria-label="Election timeline">
          {EVENTS.map((ev, i) => (
            <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector */}
              {i < EVENTS.length - 1 && (
                <div className="timeline-connector" aria-hidden="true" />
              )}

              {/* Dot */}
              <div className="flex-shrink-0 relative z-10">
                <div className={`w-10 h-10 rounded-full ${ev.color} flex items-center justify-center shadow-lg`} aria-hidden="true">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <article className={`glass rounded-2xl px-5 py-4 flex-1 border ${ev.done ? 'border-slate-600/30 opacity-70' : 'border-white/10'} hover:border-brand-saffron/30 transition-all`}>
                <time className="text-xs font-semibold text-brand-saffron tracking-wide">{ev.date}</time>
                <h2 className="font-heading font-semibold text-lg text-white mt-1 flex items-center gap-2">
                  {ev.label}
                  {ev.done && <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">Past</span>}
                </h2>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{ev.desc}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 p-5 glass rounded-2xl border border-blue-500/20">
        <p className="text-blue-300 text-sm">
          ℹ️ These dates are for educational illustration. For your specific election, always consult the{' '}
          <a
            href="https://eci.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-100 focus-visible:outline-brand-saffron"
          >
            Election Commission of India
          </a>{' '}
          or your local election authority.
        </p>
      </div>
    </PageWrapper>
  )
}
