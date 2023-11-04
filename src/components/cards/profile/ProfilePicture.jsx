import React from 'react'
import './profilePicture.css'

const ProfilePicture = (props) => {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture">
        <img
          className="picture"
          loading="lazy"
          src={props.picture}
          alt="profile picture"
        />
      </div>
    </div>
  )
}

export default ProfilePicture
