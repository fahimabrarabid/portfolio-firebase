import emailjs from 'emailjs-com'
import dayjs from 'dayjs'

export const sendEmail = (info) => {
  const convertDateToURL = (dateString) => {
    const startTime = dayjs(dateString, 'DD-MM-YYYY hh:mm A')
    const endTime = startTime.add(15, 'minutes')

    const formattedStartDate = startTime.format('YYYYMMDDTHHmm00')
    const formattedEndDate = endTime.format('YYYYMMDDTHHmm00')

    const convertedDateTime = `${formattedStartDate}%2F${formattedEndDate}`

    return convertedDateTime
  }

  const convertTextToURL = (text) => {
    const encodedText = encodeURIComponent(text)
    return encodedText
  }

  const title = convertTextToURL(
    `Appointment with ${info.name} for ${info.purpose}`
  )
  const desc = convertTextToURL(
    `Appointment with ${info.name} for ${info.purpose} at ${info.time} on ${info.date}, ${info.day}`
  )
  const dates = convertDateToURL(`${info.date} ${info.time}`)

  const templateParams = {
    name: info.name, // name of the appointment requester
    email: info.email, // email of the appointment requester
    purpose: info.purpose, // purpose of the appointment
    date: info.date, // date of the appointment
    day: info.day, // week day of the appointment
    time: info.time, // time of the appointment
    link: `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${desc}&dates=${dates}&ctz=Asia%2FDhaka&add=${info.email}`,
  }

  return new Promise((resolve) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        resolve(true)
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        resolve(false)
      })
  })
}
