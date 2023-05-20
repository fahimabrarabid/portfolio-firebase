import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../configs/firebase'

const ButtonGroup = ({ start, end, date }) => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [appointmentList, setAppointmentList] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'appointments'), (snapshot) => {
      const updatedAppointmentList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setAppointmentList(updatedAppointmentList)
    })

    return () => unsubscribe()
  }, [])

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex)
  }

  const convertToMinutes = (time) => {
    const [hour, minute] = time.split(':')
    let totalMinutes = parseInt(hour, 10) * 60 + parseInt(minute, 10)

    // Adjust for PM hours
    if (time.toLowerCase().includes('pm') && hour !== '12') {
      totalMinutes += 12 * 60
    }

    return totalMinutes
  }

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const amPm = hours < 12 ? 'AM' : 'PM'
    const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
    const formattedMinutes = mins < 10 ? `0${mins}` : mins
    return `${formattedHours}:${formattedMinutes} ${amPm}`
  }

  const startTime = convertToMinutes(start)
  const endTime = convertToMinutes(end)
  const interval = 15

  const timeSlots = []
  for (let i = startTime; i <= endTime; i += interval) {
    timeSlots.push(i)
  }

  const isTimeSlotDisabled = (timeSlot, date) => {
    const appointmentTimes = appointmentList.map((appointment) => {
      const appointmentTime = convertToMinutes(appointment.time)
      const appointmentDate = appointment.date

      // Check if the appointment matches the date and time slot
      if (appointmentDate === date && appointmentTime === timeSlot) {
        return true // Disable the time slot
      }

      return false
    })

    return appointmentTimes.includes(true)
  }

  return (
    <div className="flex flex-wrap gap-1">
      {timeSlots.map((timeSlot, index) => {
        const buttonWidth = `65px`
        return (
          <button
            key={index}
            className={classNames('px-4 py-2 m-1 border', {
              'border-blue-500': selectedButton === index,
              'border-gray-300': selectedButton !== index,
              'bg-gray-300': isTimeSlotDisabled(timeSlot, date),
              'cursor-not-allowed': isTimeSlotDisabled(timeSlot, date),
            })}
            onClick={() => handleButtonClick(index)}
            disabled={isTimeSlotDisabled(timeSlot, date)}
            style={{ width: buttonWidth }}
          >
            {formatTime(timeSlot)}
          </button>
        )
      })}
    </div>
  )
}

export default ButtonGroup
