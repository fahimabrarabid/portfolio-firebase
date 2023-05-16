import React from 'react'
import './profilePicture.css'
import Info from '../../../configs/data'
import Contact from '../contacts/Contacts'

const ProfilePicture = (props) => {
  return (
    <div className="profile-picture-container">
      <div className="hidden md:block lg:block w-1/4"></div>
      <div className="profile-picture">
        <img className="picture" src={props.picture} alt="profile picture" />
      </div>
      <div className="contact-section">
        <Contact contact={Info.contact} />
      </div>
    </div>
  )
}

export default ProfilePicture
