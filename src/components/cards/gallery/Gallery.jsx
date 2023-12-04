import React from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

const Gallery = (props) => {
  const { title, category, provider, place, date, guest, image } = props.props

  return (
    <Card className="flex h-full py-1 mt-6 w-full md:w-4/12 lg:w-1/4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category}</p>
        <div>
          <small className="text-default-600 p-1 bg-gray-200/90 rounded">
            {date}
          </small>{' '}
          <small className="text-default-500">{place}</small>
        </div>
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500 font-semibold">{provider}</small>
      </CardHeader>
      <CardBody className="w-full py-2 items-center justify-center">
        <img
          alt="Card background"
          className="rounded-xl w-full h-full object-cover"
          src={image}
        />
      </CardBody>
    </Card>
  )
}

export default Gallery
