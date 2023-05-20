import emailjs from 'emailjs-com'

export const sendEmail = (recipient, subject, message) => {
  const templateParams = {
    from_name: 'Your Name',
    to_name: recipient,
    message: message,
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
