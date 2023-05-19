import React from 'react'
import './contactsicon.css'
import { CiLinkedin, CiFacebook, CiMail, CiPhone, CiLogout } from 'react-icons/ci'
import { VscGithub } from 'react-icons/vsc'
import IsLogged from '../../../configs/IsLogged'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { signOut } from 'firebase/auth'
import { auth } from '../../../configs/firebase'

const ContactsIcon = (props) => {
  const isLogged = IsLogged()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="contact-icon">
      {props.contact.email ? (
        <a target="_blank" href={'mailto:' + props.contact.email}>
          <CiMail size="1.8em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.phone ? (
        <a target="_blank" href={'tel:' + props.contact.phone}>
          <CiPhone size="1.8em" />
        </a>
      ) : (
        ''
      )}

      {props.contact.facebook ? (
        <a target="_blank" href={'https://facebook.com/' + props.contact.facebook}>
          <CiFacebook size="1.8em" />
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
          <CiLinkedin size="1.8em" />
        </a>
      ) : (
        ''
      )}

      {isLogged && <RiLogoutCircleRLine onClick={handleSignOut} className="icon" size="1.65em" />}
    </div>
  )
}

export default ContactsIcon
