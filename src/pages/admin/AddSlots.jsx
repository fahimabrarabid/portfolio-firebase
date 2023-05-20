import React, { useState } from 'react'
import addData from '../../configs/addData'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import dayjs from 'dayjs'

const AddSlots = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const [selectedDay, setSelectedDay] = useState('')

  const handleStartTimeChange = (time) => {
    setStartTime(dayjs(time).format('hh:mm A'))
    const formattedTime = dayjs(startTime).format('hh:mm A')
    console.log(`Selected Start Time: ${formattedTime}`)
  }

  const handleEndTimeChange = (time) => {
    setEndTime(dayjs(time).format('hh:mm A'))
    const formattedTime = dayjs(endTime).format('hh:mm A')
    console.log(`Selected End Time: ${formattedTime}`)
  }

  const addSlot = async () => {
    await addData('slots', { day: selectedDay, startTime: startTime, endTime: endTime })
  }

  const handleSelectChange = (value) => {
    setSelectedDay(value)
  }

  return (
    <div className="flex flex-col items-center justify-center m-2">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">Add Slots</h1>
      <div className="flex gap-2">
        <select id="service-select" className="h-14 shadow-md appearance-none border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => handleSelectChange(e.target.value)} value={selectedDay}>
          <option value="">Select a Day</option>
          {dayList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker onChange={handleStartTimeChange} label={'Start Time'} views={['hours', 'minutes']} />
          <MobileTimePicker onChange={handleEndTimeChange} label={'End Time'} views={['hours', 'minutes']} />
        </LocalizationProvider>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={addSlot}>
          Add Slot
        </button>
      </div>
    </div>
  )
}

export default AddSlots
