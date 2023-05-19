import { useEffect, useState } from 'react'
import { auth } from './firebase'

const IsLogged = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })

    return unsubscribe // Unsubscribe when the component is unmounted
  }, [])

  return loggedIn
}

export default IsLogged
