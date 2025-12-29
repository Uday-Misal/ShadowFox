import '../styles/playerMetricsTable.css'

function PlayerMetricRow({ player }) {
  return (
    <div className="metrics-row">
      <div className="player-cell">
        <img src={player.image} alt={player.name} />
        <span>{player.name}</span>
      </div>

      <div>{player.role}</div>
      <div>{player.matches}</div>
      <div>{player.runs}</div>
      <div>{player.wickets}</div>
      <div>{player.avg}</div>
      <div>{player.sr}</div>
    </div>
  )
}

export default PlayerMetricRow
