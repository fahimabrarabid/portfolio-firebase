import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Chart, { ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
  const [appointmentList, setAppointmentList] = useState([])
  const [pieChartData, setPieChartData] = useState(null)
  const [legendPosition, setLegendPosition] = useState('right')

  const getAppointmentList = async () => {
    try {
      const data = await getDocs(collection(db, 'appointments'))
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setAppointmentList(filteredData.filter((data) => data.name !== ''))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAppointmentList()
  }, [])

  useEffect(() => {
    if (appointmentList.length === 0) {
      setPieChartData(null) // Reset pie chart data if Appointment list is empty
      return
    }

    const countMap = {}
    appointmentList.forEach((appointment) => {
      if (countMap[appointment.purpose]) {
        countMap[appointment.purpose] += 1
      } else {
        countMap[appointment.purpose] = 1
      }
    })

    const purposes = Object.keys(countMap)
    const backgroundColors = colors.slice(0, purposes.length)

    // Automatically Calculate the lighter shade of the background color
    const borderColors = colors.map((color) => {
      const colorValue = color.substring(1) // Remove the "#" character
      const parsedColor = parseInt(colorValue, 16) // Parse the color value to integer
      const lighterColor = (parsedColor & 0xfefefe) >> 1 // Calculate the lighter shade
      const borderColor = `#${lighterColor.toString(16).padStart(6, '0')}` // Convert the lighter shade to hexadecimal
      return borderColor
    })

    const pieChartData = {
      labels: purposes,
      datasets: [
        {
          label: 'Appointment Status',
          data: purposes.map((purpose) => countMap[purpose]),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    }

    setPieChartData(pieChartData)
  }, [appointmentList])

  const colors = [
    '#1C2331',
    '#324556',
    '#475D6F',
    '#5E7384',
    '#748D9A',
    '#8AA7B1',
    '#A0C1C8',
    '#D6E2E9',
    '#E8F1F4',
  ]
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        display: true,
        position: legendPosition,
        align: 'start',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataset = context.chart.data.datasets[context.datasetIndex]
            const value = dataset.data[context.dataIndex]
            return `Counselled: ${value}/${appointmentList.length} (${(
              (value / appointmentList.length) *
              100
            ).toFixed(2)}%)`
          },
        },
      },
    },
  }

  // Update the legend position to bottom on mobile devices
  const updateLegendPosition = () => {
    if (window.innerWidth < 768) {
      setLegendPosition('bottom')
    } else {
      setLegendPosition('right')
    }
  }

  useEffect(() => {
    // Set initial legend position
    updateLegendPosition()

    // Add window resize event listener
    window.addEventListener('resize', updateLegendPosition)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateLegendPosition)
    }
  }, [])

  if (pieChartData === null) {
    // Render loading state or placeholder when pieChartData is null
    return (
      <div className="flex items-center justify-center h-52">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-500 h-12 w-12"></div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="w-full h-72">
        <Pie data={pieChartData} options={options} />
      </div>
      <div className="flex items-center gap-5 justify-around text-center text-slate-800 font-semibold mt-4">
        <div className="text-lg">Total: {appointmentList.length} </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold border-l-4 pl-5 border-slate-600">
          {appointmentList.length * 15} Minutes of Volunteering Work
        </div>
      </div>
    </div>
  )
}

export default PieChart
