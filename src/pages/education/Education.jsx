import React from 'react'
import './education.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import ProfilePicture from '../../components/cards/profile/ProfilePicture'
import Profile from '../../components/cards/profile/Profile'
import About from '../../components/cards/about/About'

const Education = () => {
  useDocumentTitle('Academic Background')

  return (
    <div className="container">
      <p>Academic Background</p>
    </div>
  )
}

export default Education
