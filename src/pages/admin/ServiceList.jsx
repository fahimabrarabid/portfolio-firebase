import React, { useEffect, useState } from 'react'
import { db } from '../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Service from './Service'

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([])
  const serviceRef = collection(db, 'services')

  // Services
  const getServiceList = async () => {
    try {
      const data = await getDocs(serviceRef)
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      // filter empty data
      setServiceList(filteredData.filter((data) => data.name !== ''))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getServiceList()
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
