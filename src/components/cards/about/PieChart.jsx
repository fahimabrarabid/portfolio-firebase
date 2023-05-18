import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Chart, { ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
  // fetch counselling
  const [counsellingList, setCounsellingList] = useState([])

  // Counselling
  const getCounsellingList = async () => {
    try {
      const data = await getDocs(collection(db, 'counselling'))
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      // filter empty data
      setCounsellingList(filteredData.filter((data) => data.name !== ''))
    } catch (error) {
      console.log(error)
    }
  }

  // create count map based on counselling purpose
  const createCountMap = () => {
    const countMap = {}
    counsellingList.forEach((counselling) => {
      if (countMap[counselling.purpose]) {
        countMap[counselling.purpose] += 1
      } else {
        countMap[counselling.purpose] = 1
      }
    })
    // Transform the map into an array of objects for pie chart data
    const pieChartData = Object.keys(countMap).map((purpose) => ({
      label: purpose,
      value: countMap[purpose],
      backgroundColor: colors[index % backgroundColor.length],
      hoverBackgroundColor: colors[index % hoverBackgroundColor.length],
      borderWidth: 1,
    }))
    setPieChartData(pieChartData)
  }

  useEffect(() => {
    getCounsellingList()
    createCountMap()
  }, [])

  // setup
  const [pieChartData, setPieChartData] = useState([])
  const backgroundColor = ['#1C2331', '#324556', '#475D6F', '#5E7384', '#748D9A', '#8AA7B1', '#A0C1C8', '#D6E2E9', '#ECEFF4']
  const hoverBackgroundColor = ['#1C2331', '#324556', '#475D6F', '#5E7384', '#748D9A', '#8AA7B1', '#A0C1C8', '#D6E2E9', '#ECEFF4']

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    // Add any additional chart options here
  }

  const totalCount = pieChartData.reduce((total, data) => total + data.value, 0)

  return (
    <div className="flex gap-2 content-center items-center">
      <Pie className="w-52 h-52" data={pieChartData} options={options} />
      <p className="text-center text-lg font-bold mt-4">Total: {totalCount}</p>
    </div>
  )
}

export default PieChart
