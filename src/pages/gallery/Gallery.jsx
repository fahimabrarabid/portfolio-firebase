import React from 'react'
import { Gallery as G } from '@/components'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'

import './gallery.css'

const Gallery = () => {
  useDocumentTitle('Gallery')

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center items-center">
      {Info.gallery.map((item, index) => (
        <G key={index} props={item}></G>
      ))}
    </div>
  )
}

export default Gallery
