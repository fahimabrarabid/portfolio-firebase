import React from 'react'
import './profilePicture.css'

const ProfilePicture = (props) => {
  return (
    <div className="profile-picture-container">
      <img
        className="profile-picture"
        src={props.picture}
        alt="profile picture"
      />
    </div>
  )
}

export default ProfilePicture
