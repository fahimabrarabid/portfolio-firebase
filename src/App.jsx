import Navbar from './components/navbar/Navbar'
import Academics from './pages/academics/Academics'
import Achievements from './pages/achievements/Achievements'
import Experiences from './pages/experiences/Experiences'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
