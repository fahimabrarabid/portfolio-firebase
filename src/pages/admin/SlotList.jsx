import React, { useEffect, useState } from 'react'
import Slot from './Slot'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../configs/firebase'

const SlotList = () => {
  const [slotList, setSlotList] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'slots'), (snapshot) => {
      const updatedSlotList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setSlotList(updatedSlotList)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="service-list w-3/4 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Slot List</h2>
      <ul className="space-y-2">
        {slotList.map((slot) => (
          <Slot key={slot.id} slot={slot} />
        ))}
      </ul>
    </div>
  )
}

export default SlotList
