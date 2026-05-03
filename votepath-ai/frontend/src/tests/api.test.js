// src/tests/api.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock firebase auth
vi.mock('../services/firebase', () => ({
  auth: { currentUser: null }
}))

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('API service — sendChatMessage', async () => {
  beforeEach(() => mockFetch.mockReset())

  const { sendChatMessage } = await import('../services/api')

  it('calls /api/chat with correct payload', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ answer: 'You register at the election office.' })
    })
    const result = await sendChatMessage('How do I register?', [])
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('/chat'),
      expect.objectContaining({ method: 'POST' })
    )
    expect(result.answer).toBe('You register at the election office.')
  })

  it('throws on non-ok response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Bad request' })
    })
    await expect(sendChatMessage('test')).rejects.toThrow('Bad request')
  })
})

describe('API service — translateText', async () => {
  beforeEach(() => mockFetch.mockReset())

  const { translateText } = await import('../services/api')

  it('calls /api/translate with text and targetLanguage', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ translatedText: 'Wie kann ich wählen?' })
    })
    const result = await translateText('How do I vote?', 'de')
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('/translate'),
      expect.objectContaining({ method: 'POST' })
    )
    expect(result.translatedText).toBe('Wie kann ich wählen?')
  })
})
