import React, { useEffect, useState } from 'react'
import fetchData from '../../configs/fetchData'
import Service from './Service'

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([])
  // Fetch Service list
  useEffect(() => {
    const fetchService = async () => {
      const data = await fetchData('services')
      setServiceList(data)
    }

    fetchService()
  }, [])

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <ul>
        {serviceList.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </ul>
    </div>
  )
}

export default ServiceList
