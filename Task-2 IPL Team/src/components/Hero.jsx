import { useNavigate } from 'react-router-dom'
import '../styles/hero.css'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Chennai Super Kings</h1>
        <p>Whistle Podu 💛 | The Pride of Chennai</p>

        <button
          className="hero-btn"
          onClick={() => navigate('/matches')}
        >
          View Upcoming Matches
        </button>
      </div>
    </section>
  )
}

export default Hero
