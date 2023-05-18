import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import './about.css'
import { Link } from 'react-router-dom'
import Chart, { ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const About = (props) => {
  // setup
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [18, 12, 6, 10, 12, 3, 9],
        backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
        borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    // Add any additional chart options here
  }

  const totalCount = data.datasets[0].data.reduce((acc, value) => acc + value, 0)

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
        <div className="flex gap-2 content-center items-center">
          <Pie className="w-80 h-80" data={data} options={options} />
          <p className="text-center text-lg font-bold mt-4">Total: {totalCount}</p>
        </div>
        <Link className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full shadow-lg" to="/appointment">
          Book an Appointment
        </Link>
      </div>
    </div>
  )
}

export default About
