// src/tests/Spinner.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Spinner from '../components/Spinner'

describe('Spinner', () => {
  it('renders with accessible label', () => {
    render(<Spinner label="Loading data" />)
    expect(screen.getByRole('status', { name: 'Loading data' })).toBeInTheDocument()
    expect(screen.getByText('Loading data')).toBeInTheDocument()
  })

  it('uses default label when not provided', () => {
    render(<Spinner />)
    expect(screen.getByRole('status', { name: 'Loading…' })).toBeInTheDocument()
  })
})

// src/tests/ErrorAlert.test.jsx is in same file for brevity
import ErrorAlert from '../components/ErrorAlert'

describe('ErrorAlert', () => {
  it('renders nothing when message is null', () => {
    const { container } = render(<ErrorAlert message={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders error message with alert role', () => {
    render(<ErrorAlert message="Something went wrong" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('calls onDismiss when dismiss button clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    const dismiss = vi.fn()
    render(<ErrorAlert message="Error" onDismiss={dismiss} />)
    await user.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(dismiss).toHaveBeenCalledOnce()
  })
})
