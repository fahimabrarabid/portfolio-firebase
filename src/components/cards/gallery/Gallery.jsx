import React from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

import { ImgSpacer } from '@/components'

const Gallery = (props) => {
  const { title, bigTitle, provider, place, date, guest, image } = props.props

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-justify">{bigTitle}</p>
        <div>
          {date && (
            <small className="text-default-600 p-1 bg-gray-200/90 rounded text-justify">
              {date}{' '}
            </small>
          )}
          {place && <small className="text-default-500">{place}</small>}
        </div>
        <h4 className="font-bold text-large text-justify">{title}</h4>
        {provider && (
          <small className="text-default-500 font-semibold text-justify">
            {provider}
          </small>
        )}
      </CardHeader>
      <CardBody className="w-full py-2 items-center justify-center transition duration-300 ease-in-out">
        <img
          alt={<ImgSpacer />}
          className="rounded-xl w-full h-full object-cover transition duration-300 ease-in-out"
          src={image}
          loading="lazy"
        />
      </CardBody>
    </Card>
  )
}

export default Gallery
