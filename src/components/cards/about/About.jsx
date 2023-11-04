import React, { useEffect, useState } from 'react'
import fetchData from '@/configs/fetchData'
import './about.css'
import { Link } from 'react-router-dom'
import PieChart from './PieChart'

const About = (props) => {
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
    <div className="about">
      <div className="left">
        <div className="sec-1 mt-5 md:mt-0">
          <h2>About</h2>
          <p className="flex flex-col gap-3">
            {props.info.about.map((sec, index) => (
              <span key={index}>{sec}</span>
            ))}
          </p>
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
        <PieChart />
        <Link
          className="mr-10 text-center mb-1 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          to="/appointment"
        >
          BOOK AN APPOINTMENT!
        </Link>
      </div>
    </div>
  )
}

export default About
