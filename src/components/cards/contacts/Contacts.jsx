import React from 'react'
import './contacts.css'
import Linkedin from '../../icons/Linkedin'
import Email from '../../icons/Email'
import Github from '../../icons/Github'
import Telephone from '../../icons/Telephone'
import Location from '../../icons/Location'
import Facebook from '../../icons/Facebook'
import Info from '../../../configs/data'

const Contact = (props) => {
  return (
    <div className="contact">
      {props.showTitle ? <h2>Contact</h2> : ''}
      {props.contact.email ? (
        <a target="_blank" href={'mailto:' + props.contact.email}>
          <Email className="svg-icon" /> {props.contact.email}
        </a>
      ) : (
        ''
      )}

      {props.contact.phone ? (
        <a target="_blank" href={'tel:' + props.contact.phone}>
          <Telephone className="svg-icon" /> {props.contact.phone}
        </a>
      ) : (
        ''
      )}

      {props.contact.facebook ? (
        <a target="_blank" href={'https://facebook.com/' + props.contact.facebook}>
          <Facebook className="svg-icon" /> {Info.profile.name}
        </a>
      ) : (
        ''
      )}

      {props.contact.github ? (
        <a target="_blank" href={'https://github.com/' + props.contact.github}>
          <Github className="svg-icon" /> @{props.contact.github}
        </a>
      ) : (
        ''
      )}

      {props.contact.linkedin ? (
        <a target="_blank" href={'https://www.linkedin.com/in/' + props.contact.linkedin}>
          <Linkedin className="svg-icon" /> @{props.contact.linkedin}
        </a>
      ) : (
        ''
      )}

      {props.contact.address ? (
        <p>
          <Location className="svg-icon" />
          {props.contact.address}
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Contact
