import React, { useState } from 'react'
import addData from '../../configs/addData'

const AddService = () => {
  const [service, setService] = useState('')

  const addService = async () => {
    await addData('services', { name: service })
  }

  return (
    <div className="flex flex-col items-center justify-center m-2">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">Add Service</h1>
      <div className="flex gap-2">
        <input className="px-4 py-2 h-10 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" type="text" value={service} placeholder="Enter Service Name" onChange={(e) => setService(e.target.value)} />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={addService} disabled={!service}>
          Add Service
        </button>
      </div>
    </div>
  )
}

export default AddService
