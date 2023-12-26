import { useState, useEffect } from 'react'
import { type User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@config/firebase.config'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setIsLoggedIn(true)
        setUser(user)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [])

  return {
    user,
    isLoggedIn,
    loading,
  }
}
