// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth, googleProvider } from '../services/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return unsub
  }, [])

  const clearError = () => setError(null)

  const loginWithGoogle = async () => {
    try {
      clearError()
      await signInWithPopup(auth, googleProvider)
    } catch (e) {
      setError(e.message)
    }
  }

  const loginWithEmail = async (email, password) => {
    try {
      clearError()
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(e.message)
    }
  }

  const registerWithEmail = async (email, password) => {
    try {
      clearError()
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(e.message)
    }
  }

  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider
      value={{ user, loading, error, clearError, loginWithGoogle, loginWithEmail, registerWithEmail, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
