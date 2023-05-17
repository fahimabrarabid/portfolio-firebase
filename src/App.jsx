import Navbar from './components/navbar/Navbar'
import Academics from './pages/academics/Academics'
import Achievements from './pages/achievements/Achievements'
import Experiences from './pages/experiences/Experiences'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Research from './pages/research/Research'
import Certification from './pages/certification/Certification'
import Appointment from './pages/appointment/Appointment'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="academic"
            element={
              <div className="w-3/4 mx-auto">
                <Academics />
              </div>
            }
          />
          <Route
            path="experiences"
            element={
              <div className="w-3/4 mx-auto">
                <Experiences />
              </div>
            }
          />
          <Route
            path="achievements"
            element={
              <div className="w-3/4 mx-auto">
                <Achievements />
              </div>
            }
          />
          <Route
            path="research"
            element={
              <div className="w-3/4 mx-auto">
                <Research />
              </div>
            }
          />
          <Route
            path="certification"
            element={
              <div className="w-3/4 mx-auto">
                <Certification />
              </div>
            }
          />
          <Route path="appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
