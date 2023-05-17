import React from 'react'
import './appointment.css'
import Calendar from '../../components/googleCalendar/Calendar'
import Info from '../../configs/data'

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-header">
        <h2>My Schedules</h2>
      </div>
      <div className="appointment-content">
        <Calendar id={Info.calendarID} />
      </div>
    </div>
  )
}

export default Appointment
