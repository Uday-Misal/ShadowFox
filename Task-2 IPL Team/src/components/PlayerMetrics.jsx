import { cskPlayerMetrics } from '../data/cskPlayerMetrics'
import PlayerMetricRow from './PlayerMetricRow'
import '../styles/playerMetricsTable.css'

function PlayerMetrics() {
  return (
    <section className="metrics-section">
      <div className="metrics-table-wrapper">
        {/* Header */}
        <div className="metrics-header">
          <div>Player Profile</div>
          <div>Role</div>
          <div>Matches</div>
          <div>Runs</div>
          <div>Wickets</div>
          <div>AVG</div>
          <div>S/R</div>
        </div>

        {/* Rows */}
        {cskPlayerMetrics.map((player, index) => (
          <PlayerMetricRow key={index} player={player} />
        ))}
      </div>
    </section>
  )
}

export default PlayerMetrics
