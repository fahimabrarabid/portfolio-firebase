import Navbar from './components/navbar/Navbar'
import Education from './pages/education/Education'
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
          <Route path="academic" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
