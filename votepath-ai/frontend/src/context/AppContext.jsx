// src/context/AppContext.jsx — Language, theme, font-size, high-contrast
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'mr', label: 'मराठी' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
]

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('vp_lang') || 'en')
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('vp_hc') === 'true')
  const [fontScale, setFontScale] = useState(() => parseFloat(localStorage.getItem('vp_fs') || '1'))
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('vp_dark') !== 'false')

  // Persist and apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('vp_dark', darkMode)
  }, [darkMode])

  // Persist and apply font scale
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', fontScale)
    localStorage.setItem('vp_fs', fontScale)
  }, [fontScale])

  // Persist high-contrast
  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('vp_hc', highContrast)
  }, [highContrast])

  // Persist language and update <html lang>
  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    localStorage.setItem('vp_lang', language)
  }, [language])

  const cycleFontSize = () => {
    setFontScale((s) => {
      if (s < 1.1) return 1.1
      if (s < 1.25) return 1.25
      return 1
    })
  }

  return (
    <AppContext.Provider
      value={{
        language, setLanguage, LANGUAGES,
        highContrast, setHighContrast,
        fontScale, cycleFontSize,
        darkMode, setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
