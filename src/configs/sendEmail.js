import emailjs from 'emailjs-com'

export const sendEmail = (info) => {
  const convertDateToURL = (dateString) => {
    const [datePart, timePart] = dateString.split(' ')
    const [dd, mm, yyyy] = datePart.split('-')
    const [hh, min, A] = timePart.split(':')

    const formattedDate = `${yyyy}${mm}${dd}`
    const formattedTime = `${hh}${min}00`

    const convertedDateTime = `${formattedDate}T${formattedTime}%2F${formattedDate}T${formattedTime}&ctz`

    return convertedDateTime
  }

  const convertTextToURL = (text) => {
    const encodedText = encodeURIComponent(text)
    return encodedText
  }

  const title = convertTextToURL(
    `Appointment with ${info.name} for ${info.purpose}}`
  )
  const desc = convertTextToURL(
    `Appointment with ${info.name} for ${info.purpose}} at ${info.time} on ${info.date}, ${info.day}`
  )
  const dates = convertDateToURL(`${info.date} ${info.time}`)

  const templateParams = {
    name: info.name, // name of the appointment requester
    email: info.email, // email of the appointment requester
    purpose: info.purpose, // purpose of the appointment
    date: info.date, // date of the appointment
    day: info.day, // week day of the appointment
    time: info.time, // time of the appointment
    link: `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${desc}&dates=${dates}&ctz=Asia%2FDhaka`,
  }

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully!', response.text)
    })
    .catch((error) => {
      console.error('Error sending email:', error)
    })
}
