import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const fetchData = async (tableName) => {
  const tableRef = collection(db, tableName)
  try {
    const data = await getDocs(tableRef)
    const dataList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return dataList
  } catch (error) {
    console.log(`Error fetching ${tableName} data:`, error)
    return [] // Return an empty array in case of an error
  }
}

export default fetchData
