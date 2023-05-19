import { useEffect, useState } from 'react'
import { auth } from './firebase'

const getCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    return () => unsubscribe() // Unsubscribe when the component is unmounted
  }, [])

  return currentUser
}

export default getCurrentUser
