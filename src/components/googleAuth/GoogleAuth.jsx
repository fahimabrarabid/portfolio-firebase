import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '@/configs/firebase'
import fetchData from '@/configs/fetchData'
import { FcGoogle } from 'react-icons/fc'
import addData from '@/configs/addData'
import { addGoogleUser } from '@/configs/googleUser'

export const GoogleAuth = () => {
  // Fetch admin list
  const [adminList, setAdminList] = useState([])
  const [adminListFetched, setAdminListFetched] = useState(false) // New state to track if admin list data has been fetched

  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await fetchData('admin')
      setAdminList(data)
      setAdminListFetched(true) // Set the adminListFetched state to true once data is fetched
    }

    fetchAdmin()
  }, [])

  const addAdmin = async (u) => {
    await addData('admin', {
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

      // Store user in db
      await addGoogleUser(result.user)

      // if no admin in the database add the user as admin
      if (adminList.length === 0 && result.user) {
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
        {!user &&
          adminListFetched && ( // Add adminListFetched check here
            <div>
              {/* If admin list doesn't have any data */}
              <div>
                <p className="text-lg mb-4">
                  {adminList.length === 0
                    ? 'There are no admins in the database. Sign in to register as an admin.'
                    : 'Please Sign In to Make an Appointment'}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={signInWithGoogle}
                  className="rounded-xl border-2 border-blue-400 bg-blue-100 hover:bg-blue-300 text-slate-700 font-semibold py-2 px-4 flex items-center text-3xl"
                >
                  <FcGoogle className="mr-2" />
                  Sign In With Google
                </button>
              </div>
            </div>
          )}
      </div>
    </>
  )
}
