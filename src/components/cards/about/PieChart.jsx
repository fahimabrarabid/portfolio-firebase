import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Chart, { ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

Chart.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
  const [counsellingList, setCounsellingList] = useState([])
  const [pieChartData, setPieChartData] = useState([])
  const counsellingRef = collection(db, 'counselling')

  const getCounsellingList = async () => {
    try {
      const data = await getDocs(counsellingRef)
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      filteredData.filter((data) => data.purpose !== '')
      setCounsellingList(filteredData)
      console.log('Counselling List: ')
      console.log(counsellingList)
    } catch (error) {
      console.log('error in getCounsellingList: ')
      console.log(error)
    }
  }

  useEffect(() => {
    getCounsellingList()
  }, [])

  useEffect(() => {
    const countMap = {}
    counsellingList.forEach((counselling) => {
      if (countMap[counselling.purpose]) {
        countMap[counselling.purpose] += 1
      } else {
        countMap[counselling.purpose] = 1
      }
    })

    console.log('Count Map: ')
    console.log(countMap)

    const pieChartData = {
      labels: Object.keys(countMap),
      datasets: [
        {
          label: 'Counselling Purpose',
          data: Object.values(countMap),
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        },
      ],
    }

    setPieChartData(pieChartData)
    console.log('Pie Chart: ')
    console.log(pieChartData)
  }, [counsellingList])

  const colors = ['#1C2331', '#324556', '#475D6F', '#5E7384', '#748D9A', '#8AA7B1', '#A0C1C8', '#D6E2E9', '#E8F1F4']
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
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

  const totalCount = counsellingList.length

  return (
    <div className="flex gap-2 content-center items-center">
      <Pie className="w-52 h-52" data={pieChartData} options={options} />
      <p className="text-center text-lg font-bold mt-4">Total: {totalCount}</p>
    </div>
  )
}

export default PieChart
