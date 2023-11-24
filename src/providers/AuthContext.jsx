import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from '@/configs/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { logger } from '@/logger'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      setUser(newUser)
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)
      return user
    } catch (error) {
      logger.error(`Google Sign-In Error: ${error.message}`)
      return null
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      logger.error(`Google Sign-Out Error: ${error.message}`)
    }
  }

  const authContextValue = {
    user,
    signInWithGoogle,
    signOutUser,
    isLoading,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
