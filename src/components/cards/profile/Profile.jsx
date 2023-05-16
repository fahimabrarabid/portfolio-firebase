import React from 'react'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile">
      <h1>{props.info.name}</h1>
      {/* If exist render */}
      {props.info.title ? <h2>{props.info.title}</h2> : ''}
    </div>
  )
}

export default Profile
