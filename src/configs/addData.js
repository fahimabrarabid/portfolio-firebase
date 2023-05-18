import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

const addData = async (tableName, obj) => {
  const tableRef = collection(db, tableName)
  try {
    const data = await addDoc(tableRef, obj)
    console.log(`Added ${tableName} data with ID: ${data.id}`)
  } catch (error) {
    console.log(`Error adding ${tableName} data:`, error)
  }
}

export default addData
