import { Login } from '../../components/googleAuth/Login'
import ServiceList from './ServiceList'
import UserList from './UserList'

const Admin = () => {
  return (
    <div>
      <Login />
      <ServiceList />
      <UserList />
    </div>
  )
}

export default Admin
