import React from 'react'
import { db } from '../../configs/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const Service = (props) => {
  const deleteService = async (id) => {
    const serviceDoc = doc(db, 'services', id)
    await deleteDoc(serviceDoc)
  }

  return (
    <div className="p-1 border-b-2 flex items-center justify-between">
      <p className="text-gray-800">{props.service.name}</p>
      <button onClick={() => deleteService(props.service.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded">
        Delete
      </button>
    </div>
  )
}

export default Service
