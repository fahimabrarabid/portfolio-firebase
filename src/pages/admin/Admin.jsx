import React, { useState } from 'react'
import { db } from '../../configs/firebase'

const Admin = () => {
  const [adminList, setAdminList] = useState([])

  const getAdminList = async () => {
    const response = db.collection('admin')
    const data = await response.get()
    data.docs.forEach((item) => {
      setAdminList([...adminList, item.data()])
    })
  }

  return <div>Admin</div>
}

export default Admin
