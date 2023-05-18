import fetchData from './fetchData'
import { auth } from './firebase'

const isAdmin = async () => {
  const adminList = await fetchData('admin')

  auth.onAuthStateChanged((user) => {
    if (user) {
      // loop through adminList and match uid
      adminList.forEach((admin) => {
        if (admin.uid === user.uid) {
          return true
        }
      })
    }
  })
  return false
}

export default isAdmin
