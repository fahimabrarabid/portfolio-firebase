import React from 'react'
import './research.css'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'
import SimpleSquareCard from '@/components/cards/simpleSquareCard/SimpleSquareCard'
import AnimatedPage from '@/AnimatedPage'

const Research = () => {
  useDocumentTitle('Research & Publications')
  return (
    <AnimatedPage>
      <div className="certification-container">
        <SimpleSquareCard
          data={Info.research}
          title="Research & Publications"
        />
      </div>
    </AnimatedPage>
  )
}

export default Research
