import { useEffect, useState } from 'react'
import fetchData from './fetchData'
import { auth } from './firebase'

const IsAdmin = () => {
  const [adminList, setAdminList] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe // Unsubscribe when the component is unmounted
  }, [])

  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await fetchData('admin')
      setAdminList(data)
    }

    fetchAdmin()
  }, [])

  useEffect(() => {
    const checkIsAdmin = () => {
      setIsAdmin(adminList.some((admin) => admin.uid === user?.uid))
    }

    checkIsAdmin()
  }, [adminList, user])

  return isAdmin
}

export default IsAdmin
