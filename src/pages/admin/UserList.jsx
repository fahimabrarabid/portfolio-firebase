import React, { useEffect, useState } from 'react'
import { getGoogleUsers } from '../../configs/googleUser'
import addData from '../../configs/addData'
import { db } from '../../configs/firebase'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'

const UserList = () => {
  const [googleUsers, setGoogleUsers] = useState([])

  useEffect(() => {
    const fetchGoogleUsers = async () => {
      const users = await getGoogleUsers()
      setGoogleUsers(users)
    }

    fetchGoogleUsers()
  }, [])

  const makeAdmin = async (uid) => {
    await addData('admin', { uid: uid })
  }

  const removeUserAdmin = async (uid) => {
    const adminCollectionRef = collection(db, 'admin')
    const q = query(adminCollectionRef, where('uid', '==', uid))

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(async (docSnapshot) => {
        const adminDocRef = doc(db, 'admin', docSnapshot.id)
        await deleteDoc(adminDocRef)
      })
      console.log(`Admin with UID ${uid} deleted successfully.`)
    } catch (error) {
      console.error(`Error deleting admin with UID ${uid}:`, error)
    }
  }

  return (
    <div>
      <h2>User List</h2>
      {googleUsers.map((user) => (
        <div key={user.uid}>
          <p>UID: {user.uid}</p>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => makeAdmin(user.uid)}>Make Admin</button>
          <button onClick={() => removeUserAdmin(user.uid)}>Remove Admin</button>
        </div>
      ))}
    </div>
  )
}

export default UserList
