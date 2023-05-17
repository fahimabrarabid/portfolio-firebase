import React from 'react'
import './achievements.css'
import Achievement from '../../components/cards/achievement/Achievement'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import AnimatedPage from '../../AnimatedPage'

const Achievements = () => {
  useDocumentTitle('Achievements')
  return (
    <AnimatedPage>
      <div className="achievements-container">
        <Achievement achievements={Info.achievements} />
      </div>
    </AnimatedPage>
  )
}

export default Achievements
