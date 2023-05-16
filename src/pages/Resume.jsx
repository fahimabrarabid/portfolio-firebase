import React from 'react'
import './resume.css'
import useDocumentTitle from '../assets/js/useDocumentTitle'
import Info from '../configs/data'
import ProfilePicture from '../components/cards/profile/ProfilePicture'
import Profile from '../components/cards/profile/Profile'
import About from '../components/cards/about/About'

const Resume = () => {
  useDocumentTitle(Info.profile.name + "'s Profile")

  return (
    <div className="container">
      <div className="top-header">
        <ProfilePicture picture={Info.profile.picture} />
        <Profile info={Info.profile} />
        <About info={Info.profile} />
      </div>
    </div>
  )
}

export default Resume
