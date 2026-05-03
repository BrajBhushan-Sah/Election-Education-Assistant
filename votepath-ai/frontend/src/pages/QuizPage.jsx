// src/pages/QuizPage.jsx
import { useState } from 'react'
import { generateQuiz, submitQuiz } from '../services/api'
import { useAuth } from '../context/AuthContext'
import PageWrapper from '../components/PageWrapper'
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

const TOPICS = [
  'Voter Registration Process',
  'Voting Day Procedures',
  'Election Commission of India',
  'Electoral Roll and EVM',
  'Model Code of Conduct',
]

// Fallback quiz for demo when API is unavailable
const DEMO_QUIZ = {
  questions: [
    {
      question: 'Which form is used to register as a new voter in India?',
      options: ['Form 6', 'Form 7', 'Form 8', 'Form 8A'],
      correctAnswerIndex: 0,
    },
    {
      question: 'What is the minimum voting age in India?',
      options: ['21 years', '25 years', '18 years', '16 years'],
      correctAnswerIndex: 2,
    },
    {
      question: 'What does EVM stand for?',
      options: ['Electronic Voting Machine', 'Election Verification Machine', 'Electoral Vote Mechanism', 'Electronic Voter Model'],
      correctAnswerIndex: 0,
    },
    {
      question: 'How many hours before polling do election campaigns have to stop?',
      options: ['24 hours', '48 hours', '12 hours', '72 hours'],
      correctAnswerIndex: 1,
    },
    {
      question: 'Which body conducts general elections in India?',
      options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President of India'],
      correctAnswerIndex: 2,
    },
  ],
}

export default function QuizPage() {
  const { user } = useAuth()
  const [topic, setTopic] = useState(TOPICS[0])
  const [quiz, setQuiz] = useState(null)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)

  const startQuiz = async () => {
    setLoading(true)
    setError(null)
    setAnswers([])
    setCurrent(0)
    setSelected(null)
    setFinished(false)
    setScore(0)
    try {
      const data = await generateQuiz(topic)
      setQuiz(data)
    } catch {
      setQuiz(DEMO_QUIZ) // graceful fallback
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (idx) => {
    if (selected !== null) return
    setSelected(idx)
  }

  const handleNext = async () => {
    const q = quiz.questions[current]
    const correct = selected === q.correctAnswerIndex
    const newAnswers = [...answers, { correct, selected }]
    setAnswers(newAnswers)

    if (current + 1 >= quiz.questions.length) {
      const finalScore = newAnswers.filter((a) => a.correct).length
      setScore(finalScore)
      setFinished(true)
      if (user) {
        try { await submitQuiz(finalScore, quiz.questions.length, topic) } catch {}
      }
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  const q = quiz?.questions[current]

  return (
    <PageWrapper className="max-w-2xl">
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">🧠 Civic Quiz</h1>
      <p className="text-slate-400 mb-8">Test your knowledge of the election process.</p>

      {!quiz && !loading && (
        <div className="glass rounded-2xl p-8 flex flex-col gap-5">
          <div>
            <label htmlFor="quiz-topic" className="block text-sm font-medium text-slate-300 mb-2">Choose a topic</label>
            <select
              id="quiz-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus-visible:outline-brand-saffron"
            >
              {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <ErrorAlert message={error} onDismiss={() => setError(null)} />
          <button
            onClick={startQuiz}
            className="w-full py-3.5 bg-brand-saffron hover:bg-brand-saffron-dark text-white font-semibold rounded-xl transition-all hover:scale-105 focus-visible:outline-brand-saffron"
          >
            Start Quiz →
          </button>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center gap-4 py-20">
          <Spinner size="lg" label="Generating quiz questions" />
          <p className="text-slate-400">Preparing your quiz…</p>
        </div>
      )}

      {quiz && !finished && q && (
        <div className="glass rounded-2xl p-6 flex flex-col gap-5 animate-fade-in" role="main" aria-label="Quiz question">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Question {current + 1} of {quiz.questions.length}</span>
            <span>{Math.round(((current) / quiz.questions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-gradient-to-r from-brand-saffron to-brand-green transition-all duration-500"
              style={{ width: `${(current / quiz.questions.length) * 100}%` }}
            />
          </div>

          <h2 className="font-heading font-semibold text-xl text-white">{q.question}</h2>

          <ul className="flex flex-col gap-3" role="list" aria-label="Answer options">
            {q.options.map((opt, i) => {
              let style = 'bg-slate-800 border-slate-700 text-slate-200 hover:border-brand-saffron/50'
              if (selected !== null) {
                if (i === q.correctAnswerIndex) style = 'bg-brand-green/20 border-brand-green text-brand-green'
                else if (i === selected) style = 'bg-red-500/20 border-red-500 text-red-300'
                else style = 'bg-slate-800 border-slate-700 text-slate-500 opacity-60'
              }
              return (
                <li key={i}>
                  <button
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                    aria-pressed={selected === i}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all focus-visible:outline-brand-saffron ${style} disabled:cursor-default`}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
                  </button>
                </li>
              )
            })}
          </ul>

          {selected !== null && (
            <button
              onClick={handleNext}
              className="w-full py-3 bg-brand-saffron hover:bg-brand-saffron-dark text-white font-semibold rounded-xl transition-all focus-visible:outline-brand-saffron animate-fade-in"
            >
              {current + 1 >= quiz.questions.length ? 'See Results' : 'Next Question →'}
            </button>
          )}
        </div>
      )}

      {finished && (
        <div className="glass rounded-2xl p-8 text-center flex flex-col gap-5 animate-slide-up" role="region" aria-label="Quiz results">
          <div className="text-6xl">{score === quiz.questions.length ? '🏆' : score >= quiz.questions.length / 2 ? '👍' : '📚'}</div>
          <h2 className="font-heading font-bold text-3xl text-white">Quiz Complete!</h2>
          <p className="text-5xl font-extrabold gradient-text">{score}/{quiz.questions.length}</p>
          <p className="text-slate-400">{score === quiz.questions.length ? 'Perfect score! You are well prepared to vote.' : 'Keep learning with our modules to improve your score.'}</p>
          {!user && <p className="text-xs text-slate-500">Log in to save your score to your dashboard.</p>}
          <button
            onClick={() => setQuiz(null)}
            className="w-full py-3 bg-brand-saffron hover:bg-brand-saffron-dark text-white font-semibold rounded-xl transition-all focus-visible:outline-brand-saffron"
          >
            Try Another Quiz
          </button>
        </div>
      )}
    </PageWrapper>
  )
}
