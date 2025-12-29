import PlayerCard from '../components/PlayerCard'
import { cskPlayers } from '../data/cskPlayers'
import '../styles/players.css'

function Players() {
  return (
    <div className="page players-page">
      <h2>CSK Squad – IPL 2026</h2>

      <div className="players-grid">
        {cskPlayers.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            role={player.role}
            image={player.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Players
