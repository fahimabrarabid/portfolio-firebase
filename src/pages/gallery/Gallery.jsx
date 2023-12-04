import React from 'react'
import { Gallery as G } from '@/components'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'

import './gallery.css'

const Gallery = () => {
  useDocumentTitle('Gallery')

  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 justify-center items-center">
      {Info.gallery.map((item, index) => (
        <G key={index} props={item}></G>
      ))}
    </div>
  )
}

export default Gallery
