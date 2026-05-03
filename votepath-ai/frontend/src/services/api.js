// src/services/api.js — Central API service layer
import { auth } from './firebase'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

async function getAuthHeaders() {
  const user = auth.currentUser
  if (!user) return { 'Content-Type': 'application/json' }
  const token = await user.getIdToken()
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

async function handleResponse(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Network error' }))
    throw new Error(err.message || `HTTP ${res.status}`)
  }
  return res.json()
}

// ── Chat ────────────────────────────────────────────────
export async function sendChatMessage(message, history = []) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ message, history }),
  })
  return handleResponse(res)
}

// ── Translate ───────────────────────────────────────────
export async function translateText(text, targetLanguage) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/translate`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ text, targetLanguage }),
  })
  return handleResponse(res)
}

// ── Quiz ────────────────────────────────────────────────
export async function generateQuiz(topic) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/quiz/generate`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ topic }),
  })
  return handleResponse(res)
}

export async function submitQuiz(score, totalQuestions, topic) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/quiz/submit`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ score, totalQuestions, topic }),
  })
  return handleResponse(res)
}

// ── Progress ─────────────────────────────────────────────
export async function getProgress() {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/progress`, { headers })
  return handleResponse(res)
}

export async function updateProgress(progressData) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}/progress`, {
    method: 'POST',
    headers,
    body: JSON.stringify(progressData),
  })
  return handleResponse(res)
}
