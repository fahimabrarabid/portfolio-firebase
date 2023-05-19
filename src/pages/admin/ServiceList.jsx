import React, { useEffect, useState } from 'react'
import fetchData from '../../configs/fetchData'
import Service from './Service'

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([])

  useEffect(() => {
    const fetchService = async () => {
      const data = await fetchData('services')
      setServiceList(data)
    }

    fetchService()
  }, [])

  return (
    <div className="service-list w-3/4 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Service List</h2>
      <ul className="space-y-2">
        {serviceList.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </ul>
    </div>
  )
}

export default ServiceList
