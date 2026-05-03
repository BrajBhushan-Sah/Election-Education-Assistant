// src/components/ErrorAlert.jsx
export default function ErrorAlert({ message, onDismiss }) {
  if (!message) return null
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="flex items-start gap-3 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 animate-fade-in"
    >
      <span className="text-xl" aria-hidden="true">⚠️</span>
      <p className="text-sm flex-1">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss error"
          className="text-red-400 hover:text-red-200 focus-visible:outline-brand-saffron"
        >
          ✕
        </button>
      )}
    </div>
  )
}
