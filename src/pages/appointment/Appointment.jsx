import React, { useEffect, useState } from 'react'
import './appointment.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import dayjs from 'dayjs'
import AnimatedPage from '../../AnimatedPage'
import fetchData from '../../configs/fetchData'
import { GoogleAuth } from '../../components/googleAuth/GoogleAuth'
import IsLogged from '../../configs/IsLogged'
import Calendar from '../../components/calendar/Calendar'
import ButtonGroup from './ButtonGroup'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../configs/firebase'

const Appointment = () => {
  useDocumentTitle('Book an Appointment')
  const [serviceList, setServiceList] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedService, setSelectedService] = useState('')
  const [slotList, setSlotList] = useState([])
  const [slots, setSlots] = useState([])
  const [day, setDay] = useState('')

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'slots'), (snapshot) => {
      const updatedSlots = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setSlotList(updatedSlots)
    })

    return () => unsubscribe()
  }, [])

  const handleDateSelect = (date) => {
    const formattedDate = dayjs(date).format('DD-MM-YYYY')
    setSelectedDate(formattedDate)
    // log week day
    setDay(dayjs(date).format('dddd'))
  }
  const isLogged = IsLogged()

  // Fetch Service list
  useEffect(() => {
    const fetchService = async () => {
      const data = await fetchData('services')
      setServiceList(data)
    }

    fetchService()
  }, [])

  const handleSelectChange = (value) => {
    setSelectedService(value)
  }

  // filter slotList  by the selected weekday
  useEffect(() => {
    const filteredSlots = slotList.filter((slot) => slot.day === day)
    setSlots(filteredSlots)
  }, [day, slotList])

  return (
    <AnimatedPage>
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>My Schedules</h2>
        </div>
        <div className="appointment-content">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Calendar onDateSelect={handleDateSelect} />
              {selectedDate && <div>Selected Date: {selectedDate}</div>}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">{slots.length > 0 && slots.map((slot) => <ButtonGroup key={slot.id} start={dayjs(slot.startTime).format('hh:mm A')} end={dayjs(slot.endTime).format('hh:mm A')} date={selectedDate} />)}</div>
          </div>
          {/* date picker */}
          <div className="appointment-request flex flex-col md:flex-row items-center bg-slate-100 px-5 py-3 rounded-xl">
            {isLogged ? (
              <>
                <div className="mb-4">
                  <label htmlFor="service-select" className="block text-gray-700">
                    Select a Service
                  </label>
                  <select id="service-select" className="h-14 shadow-md appearance-none border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e) => handleSelectChange(e.target.value)} value={selectedService}>
                    <option value="">Select a service</option>
                    {serviceList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className={`shadow-md rounded-xl mt-2 h-14 bg-slate-600 hover:bg-slate-700 text-slate-200 font-semibold hover:text-white py-2 px-4 border ${selectedService ? 'border-slate-500' : 'border-gray-300 cursor-not-allowed'} hover:border-transparent rounded`}
                  disabled={!selectedService}
                >
                  Request an Appointment
                </button>
              </>
            ) : (
              <GoogleAuth />
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Appointment
