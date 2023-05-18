import React from 'react'
import { db } from '../../configs/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const Service = (props) => {
  const deleteService = async (id) => {
    const serviceDoc = doc(db, 'services', id)
    await deleteDoc(serviceDoc)
  }

  return (
    <div className="p-1 border-b-2 flex gap-2">
      <p>{props.service.name}</p>
      <button onClick={() => deleteService(props.service.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  )
}

export default Service
