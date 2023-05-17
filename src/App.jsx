import Navbar from './components/navbar/Navbar'
import Academics from './pages/academics/Academics'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="academic" element={<Academics />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
