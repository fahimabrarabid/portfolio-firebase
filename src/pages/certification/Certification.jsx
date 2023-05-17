import React from 'react'
import './certification.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import SimpleSquareCard from '../../components/cards/simpleSquareCard/SimpleSquareCard'

const Certification = () => {
  useDocumentTitle('Certification & Participation')
  return (
    <div className="certification-container">
      <SimpleSquareCard data={Info.certification} title="Certification & Participation" />
    </div>
  )
}

export default Certification
