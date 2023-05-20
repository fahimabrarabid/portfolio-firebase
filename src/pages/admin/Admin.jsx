import { Login } from '../../components/googleAuth/Login'
import AddSlots from './AddSlots'
import ServiceList from './ServiceList'
import SlotList from './SlotList'
import UserList from './UserList'

const Admin = () => {
  return (
    <div>
      <AddSlots />
      <SlotList />
      <Login />
      <ServiceList />
      <UserList />
    </div>
  )
}

export default Admin
