import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src={logo} alt="CSK Logo" />
      </div>

      <ul className="navbar-menu">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/matches">Matches</NavLink></li>
        <li><NavLink to="/players">Players</NavLink></li>
        <li><NavLink to="/stats">Stats</NavLink></li>
        <li><NavLink to="/fanzone">CSK Highlights</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
