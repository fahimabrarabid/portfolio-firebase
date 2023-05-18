import React from 'react'
import './contactsicon.css'
import { CiLinkedin, CiFacebook, CiMail, CiPhone } from 'react-icons/ci'
import { VscGithub } from 'react-icons/vsc'

const ContactsIcon = (props) => {
  return (
    <div className="contact-icon">
      {props.contact.email ? (
        <a target="_blank" href={'mailto:' + props.contact.email}>
          <CiMail size="2em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.phone ? (
        <a target="_blank" href={'tel:' + props.contact.phone}>
          <CiPhone size="2em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.facebook ? (
        <a target="_blank" href={'https://facebook.com/' + props.contact.facebook}>
          <CiFacebook size="2em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.github ? (
        <a target="_blank" href={'https://github.com/' + props.contact.github}>
          <VscGithub size="1.8em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.linkedin ? (
        <a target="_blank" href={'https://www.linkedin.com/in/' + props.contact.linkedin}>
          <CiLinkedin size="2em" />
        </a>
      ) : (
        ''
      )}
    </div>
  )
}

export default ContactsIcon
