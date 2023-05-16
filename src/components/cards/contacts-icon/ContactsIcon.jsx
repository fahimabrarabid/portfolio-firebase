import React from 'react'
import './contactsicon.css'

import Linkedin from '../../icons/Linkedin'
import Email from '../../icons/Email'
import Github from '../../icons/Github'
import Telephone from '../../icons/Telephone'
import Facebook from '../../icons/Facebook'

const ContactsIcon = (props) => {
  return (
    <div className="contact-icon">
      {props.contact.email ? (
        <a target="_blank" href={'mailto:' + props.contact.email}>
          <Email className="svg-icon" />
        </a>
      ) : (
        ''
      )}

      {props.contact.phone ? (
        <a target="_blank" href={'tel:' + props.contact.phone}>
          <Telephone className="svg-icon" />
        </a>
      ) : (
        ''
      )}

      {props.contact.facebook ? (
        <a target="_blank" href={'https://facebook.com/' + props.contact.facebook}>
          <Facebook className="svg-icon" />
        </a>
      ) : (
        ''
      )}

      {props.contact.github ? (
        <a target="_blank" href={'https://github.com/' + props.contact.github}>
          <Github className="svg-icon" />
        </a>
      ) : (
        ''
      )}

      {props.contact.linkedin ? (
        <a target="_blank" href={'https://www.linkedin.com/in/' + props.contact.linkedin}>
          <Linkedin className="svg-icon" />
        </a>
      ) : (
        ''
      )}
    </div>
  )
}

export default ContactsIcon
