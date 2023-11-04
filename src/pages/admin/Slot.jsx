import React from 'react'
import { db } from '@/configs/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import dayjs from 'dayjs'

const Slot = (props) => {
  const deleteSlot = async (id) => {
    const slotDoc = doc(db, 'slots', id)
    await deleteDoc(slotDoc)
  }

  return (
    <div className="p-1 border-b-2 flex gap-3 items-center justify-between">
      <p className="text-gray-800">{props.slot.day}</p>
      <p className="text-gray-800">{props.slot.startTime}</p>
      <p className="text-gray-800">{props.slot.endTime}</p>
      <button
        onClick={() => deleteSlot(props.slot.id)}
        className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded"
      >
        Delete
      </button>
    </div>
  )
}

export default Slot
