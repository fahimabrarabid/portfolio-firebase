import React, { useEffect, useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../configs/firebase'
import AddService from '../../pages/admin/AddService'
import fetchData from '../../configs/fetchData'

export const Login = () => {
  // Fetch admin list
  const [adminList, setAdminList] = useState([])
  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await fetchData('admin')
      setAdminList(data)
    }

    fetchAdmin()
  }, [])

  // Login
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

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)

      // if no admin in the database add the user as admin
      if (adminList.length === 1 && result.user) {
        addAdmin(result.user)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  const addAdmin = async (u) => {
    try {
      const docRef = await addDoc(adminRef, {
        uid: u.uid,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  // RENDER
  return (
    <>
      {user ? (
        <div>
          <p>Hello {user.displayName}</p>
          {/* If user is admin greet */}
          {adminList.find((admin) => admin.uid === user.uid) && (
            // Admin area
            <AddService />
          )}
          <button onClick={logOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          {/* if admin list doesn't have any data show */}
          {adminList.length === 1 && (
            <div>
              <p>There is no admin in the database sign in to become admin</p>
            </div>
          )}
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      )}
    </>
  )
}
