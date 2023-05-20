import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

const addData = async (tableName, obj) => {
  const tableRef = collection(db, tableName)
  try {
    return await addDoc(tableRef, obj)
  } catch (error) {
    console.log(`Error adding ${tableName} data:`, error)
    return false
  }
}

export default addData
