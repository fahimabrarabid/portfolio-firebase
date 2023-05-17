import React from 'react'
import './experiences.css'
import Experience from '../../components/cards/experience/Experience'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'

const Experiences = () => {
  useDocumentTitle('Experiences')

  return (
    <div className="experiences-container">
      <Experience experience={Info.experience} title="Professional Experiences" />
      <Experience experience={Info.experience} title="Volunteering Experiences" />
    </div>
  )
}

export default Experiences
