import { db } from './firebase'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'

const addGoogleUser = async (user) => {
  const googleUsersRef = collection(db, 'googleUsers')
  const queryRef = query(googleUsersRef, where('uid', '==', user.uid))

  try {
    const querySnapshot = await getDocs(queryRef)
    if (querySnapshot.empty) {
      // User with the same UID doesn't exist, add the user
      await addDoc(googleUsersRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      })
      console.log('Google user added successfully')
    } else {
      console.log('User already exists')
    }
  } catch (error) {
    console.log('Error adding Google user:', error)
  }
}

const getGoogleUsers = async () => {
  const googleUsersRef = collection(db, 'googleUsers')
  try {
    const querySnapshot = await getDocs(googleUsersRef)
    const googleUsers = querySnapshot.docs.map((doc) => doc.data())
    return googleUsers
  } catch (error) {
    console.log('Error fetching Google users:', error)
    return []
  }
}

export { addGoogleUser, getGoogleUsers }
