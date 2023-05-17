import React from 'react'
import Experience from '../../components/cards/experience/Experience'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'

const Experiences = () => {
  useDocumentTitle('Experiences')

  return (
    <div className="container">
      <Experience experience={Info.experience} />
    </div>
  )
}

export default Experiences
