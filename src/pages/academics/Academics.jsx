import React from 'react'
import './academics.css'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'
import Education from '@/components/cards/education/Education'
import AnimatedPage from '@/AnimatedPage'

const Academics = () => {
  useDocumentTitle('Academic Background')

  return (
    <AnimatedPage>
      <div className="container">
        <Education education={Info.education} />
      </div>
    </AnimatedPage>
  )
}

export default Academics
