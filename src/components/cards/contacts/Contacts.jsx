import React from 'react'
import './contacts.css'
import Linkedin from '../../icons/Linkedin'
import Email from '../../icons/Email'
import Github from '../../icons/Github'
import Telephone from '../../icons/Telephone'
import Location from '../../icons/Location'

const Contact = (Info) => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      {Info.contact.email ? (
        <a target="_blank" href={'mailto:' + Info.contact.email}>
          <Email className="svg-icon" /> {Info.contact.email}
        </a>
      ) : (
        ''
      )}

      {Info.contact.phone ? (
        <a target="_blank" href={'tel:' + Info.contact.phone}>
          <Telephone className="svg-icon" /> {Info.contact.phone}
        </a>
      ) : (
        ''
      )}

      {Info.contact.github ? (
        <a target="_blank" href={'https://github.com/' + Info.contact.github}>
          <Github className="svg-icon" /> @{Info.contact.github}
        </a>
      ) : (
        ''
      )}

      {Info.contact.linkedin ? (
        <a target="_blank" href={'https://www.linkedin.com/in/' + Info.contact.linkedin}>
          <Linkedin className="svg-icon" /> @{Info.contact.linkedin}
        </a>
      ) : (
        ''
      )}

      {Info.contact.address ? (
        <p>
          <Location className="svg-icon" />
          {Info.contact.address}
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Contact
