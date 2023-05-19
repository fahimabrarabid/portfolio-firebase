import { Login } from '../../components/googleAuth/Login'
import AddSlots from './AddSlots'
import ServiceList from './ServiceList'
import UserList from './UserList'

const Admin = () => {
  return (
    <div>
      <Login />
      <AddSlots />
      <ServiceList />
      <UserList />
    </div>
  )
}

export default Admin
