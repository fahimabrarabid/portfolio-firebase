import React from 'react'
import { Gallery as G } from '@/components'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'

const Gallery = () => {
  useDocumentTitle('Gallery')

  return (
    <div className="w-full h-full py-8 px-3 flex justify-center">
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center">
        {Info.gallery.map((item, index) => (
          <G key={index} props={item}></G>
        ))}
      </div>
    </div>
  )
}

export default Gallery
