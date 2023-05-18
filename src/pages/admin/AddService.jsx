import React, { useState } from 'react'
import fetchData from '../../configs/fetchData'

const AddService = () => {
  const [service, setService] = useState('')
  // Fetch Service list
  useEffect(() => {
    const fetchService = async () => {
      const data = await fetchData('services')
      setService(data)
    }

    fetchService()
  }, [])

  return (
    <div className="flex flex-col gap-2 items-center justify-center m-2">
      <h1 className="text-lg font-semibold text-slate-800">Add Service</h1>
      <div className="flex gap-2">
        <input className="outline pl-4 p-1 h-10 outline-slate-500 outline-1 rounded-sm" type="text" value={service} placeholder="Enter Service Name" onChange={(e) => setService(e.target.value)} />
        <button className="h-10 p-2 bg-slate-200 border-slate-400 border-2 rounded-md" onClick={addService}>
          Add Service
        </button>
      </div>
    </div>
  )
}

export default AddService
