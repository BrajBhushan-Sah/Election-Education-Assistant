// src/pages/FormFinderPage.jsx
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const FORMS = [
  {
    id: 'form6',
    name: 'Form 6',
    category: 'Registration',
    desc: 'Application for inclusion of name in electoral roll. For first-time voters.',
    url: 'https://voters.eci.gov.in',
    tags: ['new voter', 'registration'],
  },
  {
    id: 'form6a',
    name: 'Form 6A',
    category: 'Registration',
    desc: 'Application for overseas voters (Indian citizens living abroad).',
    url: 'https://voters.eci.gov.in',
    tags: ['overseas', 'NRI', 'registration'],
  },
  {
    id: 'form7',
    name: 'Form 7',
    category: 'Objection',
    desc: 'Application for deletion of name from electoral roll or objection to an entry.',
    url: 'https://voters.eci.gov.in',
    tags: ['deletion', 'correction'],
  },
  {
    id: 'form8',
    name: 'Form 8',
    category: 'Correction',
    desc: 'Application for correction of entries in electoral roll (name, address, photo).',
    url: 'https://voters.eci.gov.in',
    tags: ['update', 'correction', 'address'],
  },
  {
    id: 'form8a',
    name: 'Form 8A',
    category: 'Transposition',
    desc: 'Application for transposition of entry within the same constituency.',
    url: 'https://voters.eci.gov.in',
    tags: ['move', 'constituency'],
  },
  {
    id: 'pvd',
    name: 'Postal Ballot Form',
    category: 'Postal Vote',
    desc: 'For voters who are away from their constituency during election day (service voters, elders, disabled).',
    url: 'https://eci.gov.in',
    tags: ['postal', 'absentee', 'disabled', 'senior'],
  },
]

const CATEGORIES = ['All', ...new Set(FORMS.map((f) => f.category))]

export default function FormFinderPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = FORMS.filter((f) => {
    const matchCat = category === 'All' || f.category === category
    const q = query.toLowerCase()
    const matchQ = !q || f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || f.tags.some((t) => t.includes(q))
    return matchCat && matchQ
  })

  return (
    <PageWrapper>
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
        📄 Form Finder
      </h1>
      <p className="text-slate-400 mb-8 max-w-2xl">
        Find the right official voter registration form. All forms link directly to official government portals.
      </p>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1 relative">
          <label htmlFor="form-search" className="sr-only">Search forms</label>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true">🔍</span>
          <input
            id="form-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search forms (e.g. correction, NRI, postal)"
            className="w-full pl-9 pr-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-brand-saffron/50 focus-visible:outline-brand-saffron text-sm placeholder-slate-500"
          />
        </div>
        <fieldset className="flex gap-2 flex-wrap">
          <legend className="sr-only">Filter by category</legend>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors focus-visible:outline-brand-saffron ${
                category === cat
                  ? 'bg-brand-saffron text-white'
                  : 'glass text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </fieldset>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p className="text-4xl mb-3">🔎</p>
          <p>No forms found. Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((form) => (
            <article key={form.id} className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-saffron/40 transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-brand-saffron font-semibold tracking-wide uppercase">{form.category}</span>
                  <h2 className="font-heading font-bold text-xl text-white mt-1">{form.name}</h2>
                </div>
                <span className="text-2xl" aria-hidden="true">📋</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{form.desc}</p>
              <div className="flex flex-wrap gap-1">
                {form.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">{tag}</span>
                ))}
              </div>
              <a
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${form.name} on official portal (opens in new tab)`}
                className="mt-1 w-full text-center px-4 py-2.5 rounded-xl bg-brand-saffron hover:bg-brand-saffron-dark text-white text-sm font-semibold transition-all focus-visible:outline-brand-saffron"
              >
                Open Official Portal ↗
              </a>
            </article>
          ))}
        </div>
      )}

      <p className="text-xs text-slate-600 text-center mt-10">
        All links redirect to official government portals. VotePath AI does not collect or store any form data.
      </p>
    </PageWrapper>
  )
}
