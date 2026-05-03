// src/pages/ChatPage.jsx
import { useState, useRef, useEffect, useCallback } from 'react'
import { sendChatMessage } from '../services/api'
import { useApp } from '../context/AppContext'
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

function MessageBubble({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      {!isUser && (
        <span className="w-8 h-8 rounded-full bg-brand-saffron/20 text-brand-saffron flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1" aria-hidden="true">
          🤖
        </span>
      )}
      <div className={isUser ? 'msg-bubble-user' : 'msg-bubble-ai'}>
        {/* Safe text rendering - no dangerouslySetInnerHTML */}
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
      </div>
    </div>
  )
}

const SUGGESTIONS = [
  'How do I register to vote?',
  'What ID do I need on voting day?',
  'When is the voter registration deadline?',
  'How does an EVM work?',
]

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content: "👋 Hello! I'm VotePath AI — your neutral election education assistant. I can explain the election process, voter registration, timelines, and civic education. How can I help you today?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { language } = useApp()
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = useCallback(async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return

    setError(null)
    setInput('')
    const userMsg = { role: 'user', content: msg }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const history = messages.map((m) => ({ role: m.role, parts: m.content }))
      const { answer } = await sendChatMessage(msg, history, language)
      setMessages((prev) => [...prev, { role: 'model', content: answer }])
    } catch (e) {
      setError(e.message || 'Failed to get a response. Please try again.')
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }, [input, messages, loading, language])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-4 border-b border-white/10 bg-slate-900/60 backdrop-blur">
        <span className="text-2xl" aria-hidden="true">🤖</span>
        <div>
          <h1 className="font-heading font-semibold text-white text-lg">VotePath AI Assistant</h1>
          <p className="text-xs text-slate-400">Neutral • Non-partisan • Fact-based</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-green font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
          Active
        </span>
      </header>

      {/* Messages */}
      <div
        role="log"
        aria-label="Chat conversation"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="additions"
        className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4 max-w-3xl w-full mx-auto"
      >
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}
        {loading && (
          <div className="flex justify-start" aria-label="AI is thinking">
            <div className="msg-bubble-ai flex items-center gap-2">
              <Spinner size="sm" label="AI is generating a response" />
              <span className="text-sm text-slate-400">Thinking…</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} aria-hidden="true" />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && !loading && (
        <div className="px-4 pb-2 max-w-3xl w-full mx-auto">
          <p className="text-xs text-slate-500 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-xs px-3 py-1.5 glass rounded-full text-slate-300 hover:text-white hover:border-brand-saffron/40 transition-colors focus-visible:outline-brand-saffron"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="px-4 pb-2 max-w-3xl w-full mx-auto">
          <ErrorAlert message={error} onDismiss={() => setError(null)} />
        </div>
      )}

      {/* Input */}
      <div className="border-t border-white/10 bg-slate-900/60 backdrop-blur px-4 py-4">
        <div className="max-w-3xl mx-auto flex gap-3 items-end">
          <label htmlFor="chat-input" className="sr-only">Type your election question</label>
          <textarea
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about voter registration, polling stations, election dates…"
            rows={1}
            disabled={loading}
            aria-disabled={loading}
            className="flex-1 resize-none bg-slate-800 text-white text-sm rounded-xl px-4 py-3 border border-slate-700 focus:border-brand-saffron/50 focus-visible:outline-brand-saffron placeholder-slate-500 transition-colors disabled:opacity-50"
            style={{ maxHeight: '160px', overflowY: 'auto' }}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="px-4 py-3 bg-brand-saffron hover:bg-brand-saffron-dark text-white rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 focus-visible:outline-brand-saffron"
          >
            ➤
          </button>
        </div>
        <p className="text-center text-xs text-slate-600 mt-2">
          VotePath AI provides neutral election education only. It does not provide legal or political advice.
        </p>
      </div>
    </div>
  )
}
