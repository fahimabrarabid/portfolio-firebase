import React from 'react'
import './research.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import SimpleSquareCard from '../../components/cards/simpleSquareCard/SimpleSquareCard'

const Research = () => {
  useDocumentTitle('Research & Publications')
  return (
    <div className="certification-container">
      <SimpleSquareCard data={Info.research} title="Research & Publications" />
    </div>
  )
}

export default Research
