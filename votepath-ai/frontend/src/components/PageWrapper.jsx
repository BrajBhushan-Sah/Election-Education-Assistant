// src/components/PageWrapper.jsx — consistent page layout with animation
export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`page-enter max-w-7xl mx-auto px-4 py-10 ${className}`}>
      {children}
    </div>
  )
}
