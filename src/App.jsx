import Navbar from './components/navbar/Navbar'
import Resume from './pages/Resume'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAV */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
