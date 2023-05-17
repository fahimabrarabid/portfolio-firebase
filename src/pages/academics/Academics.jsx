import React from 'react'
import './academics.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import Education from '../../components/cards/education/Education'

const Academics = () => {
  useDocumentTitle('Academic Background')

  return (
    <div className="container">
      <Education education={Info.education} />
    </div>
  )
}

export default Academics
