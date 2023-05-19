import React, { useEffect, useState } from 'react'
import { getGoogleUsers } from '../../configs/googleUser'
import fetchData from '../../configs/fetchData'
import addData from '../../configs/addData'
import { db } from '../../configs/firebase'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'
import getCurrentUser from '../../configs/getCurrentUser'

const UserList = () => {
  const [googleUsers, setGoogleUsers] = useState([])
  const currentUser = getCurrentUser()

  useEffect(() => {
    const fetchGoogleUsers = async () => {
      const users = await getGoogleUsers()
      setGoogleUsers(users)
    }

    fetchGoogleUsers()
  }, [])

  const [adminList, setAdminList] = useState([])

  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await fetchData('admin')
      setAdminList(data)
    }

    fetchAdmin()
  }, [])

  const handleMakeAdmin = async (uid) => {
    await addData('admin', { uid: uid })
    setAdminList((prevAdminList) => [...prevAdminList, { uid: uid }])
  }

  const handleRemoveUserAdmin = async (uid) => {
    const adminCollectionRef = collection(db, 'admin')
    const q = query(adminCollectionRef, where('uid', '==', uid))

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(async (docSnapshot) => {
        const adminDocRef = doc(db, 'admin', docSnapshot.id)
        await deleteDoc(adminDocRef)
      })
      console.log(`Admin with UID ${uid} deleted successfully.`)
      setAdminList((prevAdminList) => prevAdminList.filter((admin) => admin.uid !== uid))
    } catch (error) {
      console.error(`Error deleting admin with UID ${uid}:`, error)
    }
  }

  // function to check if user is admin
  const isAdmin = (uid) => {
    // return true if user is admin
    return adminList.some((admin) => admin.uid === uid)
  }

  return (
    <div className="user-list w-3/4 m-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {googleUsers.map((user) => (
        <div className="user-card bg-white rounded-md shadow-md p-4 mb-4" key={user.uid}>
          <p className="text-lg font-semibold">UID: {user.uid}</p>
          <p className="text-lg">Name: {user.displayName}</p>
          <p className="text-lg">Email: {user.email}</p>
          {currentUser.uid !== user.uid && (
            <div className="button-group mt-4">
              {isAdmin(user.uid) ? (
                <button className="admin-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveUserAdmin(user.uid)}>
                  Remove Admin
                </button>
              ) : (
                <button className="admin-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleMakeAdmin(user.uid)}>
                  Make Admin
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default UserList
