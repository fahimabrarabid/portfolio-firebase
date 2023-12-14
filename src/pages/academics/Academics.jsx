import React from 'react'
import './academics.css'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'
import Experience from '@/components/cards/experience/Experience'
import AnimatedPage from '@/AnimatedPage'

const Academics = () => {
  useDocumentTitle('Academic Background')

  return (
    <AnimatedPage>
      <div className="container">
        <h2>Academic Background</h2>
        <Experience experiences={Info.education} />
      </div>
    </AnimatedPage>
  )
}

export default Academics
