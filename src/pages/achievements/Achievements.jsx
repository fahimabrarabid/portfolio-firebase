import React from 'react'
import './achievements.css'
import Achievement from '../../components/cards/achievement/Achievement'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'

const Achievements = () => {
  useDocumentTitle('Achievements')
  return (
    <div className="achievements-container">
      <Achievement achievements={Info.achievements} />
    </div>
  )
}

export default Achievements
