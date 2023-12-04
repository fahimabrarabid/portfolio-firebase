import React from 'react'
import { Gallery as G } from '@/components'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'

import './gallery.css'

const Gallery = () => {
  useDocumentTitle('Gallery')

  return (
    <div className="w-full px-3 md:px-0 flex gap-2 flex-wrap justify-center items-center">
      {Info.gallery.map((item, index) => (
        <G key={index} props={item}></G>
      ))}
    </div>
  )
}

export default Gallery
