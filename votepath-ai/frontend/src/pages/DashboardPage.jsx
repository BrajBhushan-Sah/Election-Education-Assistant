// src/pages/DashboardPage.jsx
import { useEffect, useState } from 'react'
import { getProgress } from '../services/api'
import { useAuth } from '../context/AuthContext'
import PageWrapper from '../components/PageWrapper'
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

const MODULES = ['Voter Registration', 'Polling Station', 'Voting Day', 'EVM Basics']

function StatCard({ icon, label, value, color }) {
  return (
    <div className={`glass rounded-2xl p-5 border ${color} flex flex-col gap-2`}>
      <span className="text-3xl" aria-hidden="true">{icon}</span>
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="font-heading font-bold text-3xl text-white">{value}</p>
    </div>
  )
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [progress, setProgress] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await getProgress()
        if (!cancelled) setProgress(data)
      } catch (e) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [])

  const completedCount = progress?.completedModules?.length ?? 0
  const quizScores = progress?.quizScores ?? []
  const bestScore = quizScores.length ? Math.max(...quizScores.map((q) => Math.round((q.score / q.totalQuestions) * 100))) : 0

  return (
    <PageWrapper>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-brand-saffron/20 flex items-center justify-center text-3xl" aria-hidden="true">
          {user?.photoURL ? (
            <img src={user.photoURL} alt={`${user.displayName || 'User'} profile`} className="w-14 h-14 rounded-2xl object-cover" />
          ) : '👤'}
        </div>
        <div>
          <h1 className="font-heading font-bold text-2xl text-white">{user?.displayName || user?.email || 'Voter'}</h1>
          <p className="text-slate-400 text-sm">{user?.email}</p>
        </div>
      </div>

      {loading && <div className="py-20"><Spinner size="lg" /></div>}
      <ErrorAlert message={error} onDismiss={() => setError(null)} />

      {!loading && !error && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard icon="📚" label="Modules Completed" value={`${completedCount}/${MODULES.length}`} color="border-brand-saffron/30" />
            <StatCard icon="🧠" label="Quizzes Taken" value={quizScores.length} color="border-blue-500/30" />
            <StatCard icon="🏆" label="Best Quiz Score" value={quizScores.length ? `${bestScore}%` : '—'} color="border-brand-green/30" />
            <StatCard icon="🌐" label="Account Type" value={user?.providerData?.[0]?.providerId === 'google.com' ? 'Google' : 'Email'} color="border-purple-500/30" />
          </div>

          {/* Learning Progress */}
          <section aria-labelledby="modules-heading" className="mb-10">
            <h2 id="modules-heading" className="font-heading font-semibold text-xl text-white mb-4">Learning Progress</h2>
            <div className="flex flex-col gap-3">
              {MODULES.map((mod) => {
                const done = progress?.completedModules?.includes(mod) ?? false
                return (
                  <div key={mod} className="glass rounded-xl px-5 py-4 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${done ? 'bg-brand-green' : 'bg-slate-600'}`} aria-hidden="true" />
                      <span className="text-slate-200 text-sm font-medium">{mod}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${done ? 'bg-brand-green/20 text-brand-green' : 'bg-slate-700 text-slate-400'}`}>
                      {done ? 'Done ✓' : 'Not started'}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Quiz History */}
          <section aria-labelledby="quiz-heading">
            <h2 id="quiz-heading" className="font-heading font-semibold text-xl text-white mb-4">Quiz History</h2>
            {quizScores.length === 0 ? (
              <div className="glass rounded-xl p-8 text-center border border-white/10">
                <p className="text-4xl mb-2">🧠</p>
                <p className="text-slate-400 text-sm">No quizzes taken yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300" aria-label="Quiz score history">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th scope="col" className="text-left py-3 px-4 text-slate-400 font-medium">Topic</th>
                      <th scope="col" className="text-right py-3 px-4 text-slate-400 font-medium">Score</th>
                      <th scope="col" className="text-right py-3 px-4 text-slate-400 font-medium">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizScores.map((q, i) => {
                      const pct = Math.round((q.score / q.totalQuestions) * 100)
                      return (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-4">{q.topic}</td>
                          <td className="py-3 px-4 text-right">{q.score}/{q.totalQuestions}</td>
                          <td className="py-3 px-4 text-right">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${pct >= 80 ? 'bg-brand-green/20 text-brand-green' : pct >= 50 ? 'bg-yellow-400/20 text-yellow-300' : 'bg-red-500/20 text-red-400'}`}>
                              {pct}%
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </PageWrapper>
  )
}
