import '../styles/playerCard.css'

function PlayerCard({ name, role, image }) {
  return (
    <div className="player-card">
      <div className="player-img">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/200x200?text=CSK+Player"
          }}
        />
      </div>

      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default PlayerCard
