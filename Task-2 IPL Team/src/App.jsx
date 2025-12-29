import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MatchesPage from './pages/MatchesPage'
import Players from './pages/Players'
import Stats from './pages/Stats'
import FanZone from './pages/FanZone'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/players" element={<Players />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/fanzone" element={<FanZone />} />
        <Route path="/fanzone" element={<FanZone />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
