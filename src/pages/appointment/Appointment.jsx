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
import { collection, onSnapshot, deleteDoc } from 'firebase/firestore'
import { db } from '../../configs/firebase'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import addData from '../../configs/addData'
import getCurrentUser from '../../configs/getCurrentUser'
import { sendEmail } from '../../configs/sendEmail'
import FloatingMessage from './FloatingMessage'

const Appointment = () => {
  useDocumentTitle('Book an Appointment')
  const [serviceList, setServiceList] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedService, setSelectedService] = useState('')
  const [slotList, setSlotList] = useState([])
  const [slots, setSlots] = useState([])
  const [day, setDay] = useState('')
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [successMessageKey, setSuccessMessageKey] = useState(0)
  const [failedMessage, setFailedMessage] = useState(0)
  const currentUser = getCurrentUser()

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
    setSelectedSlot(null)
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
    setSelectedSlot(null)
  }, [day, slotList])

  // check if mobile
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSlotSelect = (time) => {
    setSelectedSlot(time)
  }

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const amPm = hours < 12 ? 'AM' : 'PM'
    const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
    const formattedMinutes = mins < 10 ? `0${mins}` : mins
    return `${formattedHours}:${formattedMinutes} ${amPm}`
  }

  const handleAppointmentRequest = async () => {
    // console.log(selectedDate, day, selectedService, formatTime(selectedSlot))

    const formattedTimeSlot = formatTime(selectedSlot)
    const dateValidation = dayjs(
      `${selectedDate} ${formattedTimeSlot}`,
      'DD-MM-YYYY hh:mm A'
    ).isBefore(dayjs())

    if (dateValidation) {
      alert('Please select a valid date and time')
    } else {
      const obj = {
        date: selectedDate,
        day: day,
        email: currentUser.email,
        name: currentUser.displayName,
        purpose: selectedService,
        time: formatTime(selectedSlot),
      }

      const docRef = await addData('appointments', obj)
      const emailSent = await sendEmail(obj)
      if (emailSent) {
        setShowSuccessMessage(true)
        setSuccessMessageKey((prevKey) => prevKey + 1)

        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      } else {
        // delete appointment from db
        if (docRef) await deleteDoc(docRef)
        // show failed message
        setFailedMessage(true)
        setSuccessMessageKey((prevKey) => prevKey + 1)

        setTimeout(() => {
          setFailedMessage(false)
        }, 3000)
      }
      setSelectedSlot(null)
    }
  }

  return (
    <AnimatedPage>
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>My Schedules</h2>
        </div>
        <div className="appointment-content">
          <AnimatePresence>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <Calendar onDateSelect={handleDateSelect} />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                {slots.length > 0 && (
                  <motion.div
                    key="slots"
                    initial={
                      isMobile
                        ? { y: -100, opacity: 0 }
                        : { x: -100, opacity: 0 }
                    }
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    exit={
                      isMobile
                        ? { y: -100, opacity: 0 }
                        : { x: -100, opacity: 0 }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      duration: 0.5,
                    }}
                  >
                    {slots.map((slot) => (
                      <ButtonGroup
                        onSlotSelect={handleSlotSelect}
                        key={slot.id}
                        start={slot.startTime}
                        end={slot.endTime}
                        date={selectedDate}
                        selectedSlot={selectedSlot}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            {/* date picker */}

            <motion.div
              key="component-under-slots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="appointment-request flex flex-col md:flex-row items-center bg-slate-100 px-5 py-3 rounded-xl"
            >
              {isLogged ? (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="service-select"
                      className="block text-gray-700"
                    >
                      Select a Service
                    </label>
                    <select
                      id="service-select"
                      className="h-14 shadow-md appearance-none border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                      onChange={(e) => handleSelectChange(e.target.value)}
                      value={selectedService}
                    >
                      <option value="">Select a service</option>
                      {serviceList.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className={`shadow-md rounded-xl mt-2 h-14 bg-slate-600  text-slate-200 font-semibold hover:text-white py-2 px-4 border ${
                      selectedService && selectedSlot
                        ? 'border-slate-500 hover:bg-slate-700'
                        : 'border-gray-300 bg-gray-500 cursor-not-allowed'
                    } hover:border-transparent rounded`}
                    disabled={!selectedService || !selectedSlot}
                    onClick={handleAppointmentRequest}
                  >
                    Request an Appointment
                  </button>
                </>
              ) : (
                <GoogleAuth />
              )}
            </motion.div>
            {/* Success message popup */}
            {showSuccessMessage && (
              <FloatingMessage
                key={`success-${successMessageKey}`} // Update the key with a unique value
                id={`success-${successMessageKey}`}
                color="green-500"
                message="Slot booked successfully!"
              />
            )}
            {/* Failed message popup */}
            {failedMessage && (
              <FloatingMessage
                key={`failed-${successMessageKey}`} // Update the key with a unique value
                id={`failed-${successMessageKey}`}
                color="red-500"
                message="Slot booking failed!"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Appointment
