// src/pages/LearnPage.jsx
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const MODULES = [
  {
    id: 'registration',
    icon: '📝',
    title: 'Voter Registration',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/30',
    steps: [
      'Check if you are eligible to vote (citizenship, age, residency requirements).',
      'Gather required documents (ID, proof of address).',
      'Visit the official election commission portal or a designated office.',
      'Complete the voter registration form accurately.',
      'Verify your registration status after submission.',
    ],
  },
  {
    id: 'polling',
    icon: '🏛️',
    title: 'Finding Your Polling Station',
    color: 'from-green-500/20 to-green-500/5',
    border: 'border-green-500/30',
    steps: [
      'Use the official election website to locate your assigned polling booth.',
      'Confirm the address and operating hours.',
      'Plan your route in advance.',
      'Know the ID documents you must carry on voting day.',
      'Check if your polling station has accessibility features if needed.',
    ],
  },
  {
    id: 'votingday',
    icon: '🗳️',
    title: 'Voting Day Steps',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/30',
    steps: [
      'Arrive at your polling station during voting hours.',
      'Present your valid voter ID to the polling officer.',
      'Your name will be verified on the electoral roll.',
      'You will receive an official ballot paper.',
      'Cast your vote privately in the voting booth.',
      'Submit your ballot and collect your ink mark as proof.',
    ],
  },
  {
    id: 'evm',
    icon: '🖥️',
    title: 'Electronic Voting Machines (EVM)',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30',
    steps: [
      'An EVM is used in many elections instead of paper ballots.',
      'It consists of a Control Unit operated by the officer and a Ballot Unit for voters.',
      'Press the button next to the candidate/symbol of your choice.',
      'A beep sound and lit lamp confirm your vote has been recorded.',
      'Each EVM can record up to 2,000 votes.',
    ],
  },
]

export default function LearnPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <PageWrapper>
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
        📚 Learn How Elections Work
      </h1>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Explore non-partisan, fact-based civic education modules. Each module walks you through an important part of the election process.
      </p>

      <div className="flex flex-col gap-4">
        {MODULES.map((mod) => {
          const open = expanded === mod.id
          return (
            <article
              key={mod.id}
              className={`glass rounded-2xl border ${mod.border} overflow-hidden transition-all`}
            >
              <button
                id={`module-btn-${mod.id}`}
                aria-expanded={open}
                aria-controls={`module-content-${mod.id}`}
                onClick={() => setExpanded(open ? null : mod.id)}
                className={`w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r ${mod.color} focus-visible:outline-brand-saffron`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl" aria-hidden="true">{mod.icon}</span>
                  <h2 className="font-heading font-semibold text-xl text-white">{mod.title}</h2>
                </div>
                <span className={`text-white transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true">▼</span>
              </button>

              {open && (
                <div
                  id={`module-content-${mod.id}`}
                  role="region"
                  aria-labelledby={`module-btn-${mod.id}`}
                  className="px-6 pb-6 pt-4 animate-fade-in"
                >
                  <ol className="flex flex-col gap-3" role="list">
                    {mod.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-saffron/20 text-brand-saffron text-xs font-bold flex items-center justify-center mt-0.5" aria-hidden="true">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </PageWrapper>
  )
}
