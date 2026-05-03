// src/components/Spinner.jsx
export default function Spinner({ size = 'md', label = 'Loading…' }) {
  const sz = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' }[size]
  return (
    <div role="status" aria-label={label} className="flex items-center justify-center">
      <div className={`${sz} border-4 border-brand-saffron border-t-transparent rounded-full animate-spin`} />
      <span className="sr-only">{label}</span>
    </div>
  )
}
