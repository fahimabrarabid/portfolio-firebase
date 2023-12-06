import React from 'react'
import { Spacer } from '@nextui-org/react'

const ImgSpacer = ({ x = 350, y = 250 }) => {
  return (
    <div className="animate-pulse bg-gray-300 rounded-xl">
      <Spacer x={x} y={y} />
    </div>
  )
}

export default ImgSpacer
