import emailjs from 'emailjs-com'

export const sendEmail = (info) => {
  const templateParams = {
    name: info.name, // name of the appointment requester
    email: info.email, // email of the appointment requester
    purpose: info.purpose, // purpose of the appointment
    date: info.date, // date of the appointment
    day: info.day, // week day of the appointment
    time: info.time, // time of the appointment
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
