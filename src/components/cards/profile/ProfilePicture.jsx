import React from 'react'
import './profilePicture.css'
import Info from '../../../configs/data'
import Contact from '../contacts/Contacts'

const ProfilePicture = (props) => {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture">
        <img className="picture" src={props.picture} alt="profile picture" />
      </div>
    </div>
  )
}

export default ProfilePicture
