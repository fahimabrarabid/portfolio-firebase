import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

export default function Calendar() {
  const calendarStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      marginBottom: '16px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    calendar: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
  }

  const handleDateChange = (newValue) => {
    const selectedDate = new Date(newValue)
    const weekDay = selectedDate.toLocaleDateString(undefined, { weekday: 'long' })
    console.log(`Selected date: ${selectedDate.toDateString()}, Week day: ${weekDay}`)
  }

  return (
    <div style={calendarStyles.container}>
      <h1 style={calendarStyles.header}>Pick a to See Slots</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={calendarStyles.calendar}>
          <DateCalendar onChange={handleDateChange} />
        </div>
      </LocalizationProvider>
    </div>
  )
}
