import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../configs/firebase'
import fetchData from '../../configs/fetchData'
import { FcGoogle } from 'react-icons/fc'
import addData from '../../configs/addData'

export const GoogleAuth = () => {
  // Fetch admin list
  const [adminList, setAdminList] = useState([])
  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await fetchData('admin')
      setAdminList(data)
    }

    fetchAdmin()
  }, [])

  const addAdmin = async (u) => {
    addData('admin', {
      uid: u.uid,
    })
  }

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

  // RENDER
  return (
    <>
      <div className="text-center">
        {!user && (
          <div>
            {/* If admin list doesn't have any data */}
            {adminList.length === 0 && (
              <div>
                <p className="text-lg mb-4">There are no admins in the database.</p>
              </div>
            )}
            <button onClick={signInWithGoogle} className="rounded-xl border-2 border-blue-400 bg-blue-100 hover:bg-blue-300 text-slate-700 font-semibold py-2 px-4 flex items-center text-3xl">
              <FcGoogle className="mr-2" />
              Sign In With Google
            </button>
          </div>
        )}
      </div>
    </>
  )
}
