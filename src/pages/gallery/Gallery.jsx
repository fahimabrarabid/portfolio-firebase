import React from 'react'
import { Gallery as G } from '@/components'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'

import './gallery.css'

const Gallery = () => {
  useDocumentTitle('Gallery')

  return (
    <div className="w-full h-full py-8 px-3 grid gap-3 grid-auto-cols">
      {Info.gallery.map((item, index) => (
        <G key={index} props={item}></G>
      ))}
    </div>
  )
}

export default Gallery
