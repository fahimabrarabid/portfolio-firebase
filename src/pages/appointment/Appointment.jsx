import React, { useEffect, useState } from 'react'
import { db } from '../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import './appointment.css'
import Calendar from '../../components/googleCalendar/Calendar'
import Info from '../../configs/data'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import dayjs from 'dayjs'
import AnimatedPage from '../../AnimatedPage'

const Appointment = () => {
  useDocumentTitle('Book an Appointment')
  const [today, setToday] = React.useState(new Date())
  const [serviceList, setServiceList] = useState([])
  const serviceRef = collection(db, 'services')

  // Services
  const getServiceList = async () => {
    try {
      const data = await getDocs(serviceRef)
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      // filter empty data
      setServiceList(filteredData.filter((data) => data.name !== ''))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getServiceList()
  }, [])

  return (
    <AnimatedPage>
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>My Schedules</h2>
        </div>
        <div className="appointment-content">
          <Calendar id={Info.calendarID} />

          {/* date picker */}
          <div className="appointment-request">
            <select
              className="appearance-none border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              // Add any additional props or event handlers you need
            >
              {serviceList.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDateTimePicker orientation="landscape" value={dayjs(today)} onChange={(newValue) => setToday(newValue)} />
            </LocalizationProvider>
            <button className="bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">Request an Appointment</button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Appointment
