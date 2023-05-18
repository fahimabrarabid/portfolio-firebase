import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import './about.css'
import { Link } from 'react-router-dom'

const About = (props) => {
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
    <div className="about">
      <div className="left">
        <div className="sec-1">
          <h2>About</h2>
          <p>{props.info.about} </p>
        </div>
        <div className="sec-2">
          <h2>Pro-bono Service</h2>
          <ul>
            {serviceList.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <Link to="/appointment">Book an Appointment</Link>
        <span>Pie Chart Here</span>
      </div>
    </div>
  )
}

export default About
