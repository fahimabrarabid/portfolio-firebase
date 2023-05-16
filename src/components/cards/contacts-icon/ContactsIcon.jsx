import React from 'react'

const ContactsIcon = () => {
  return (
    <div className="contact-icon">
      {props.showTitle ? <h2>Contact</h2> : ''}
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
