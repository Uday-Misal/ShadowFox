import MatchCard from './MatchCard'
import '../styles/matches.css'

function Matches() {
  return (
    <section className="matches-section">
      <h2>Upcoming Matches</h2>

      <div className="matches-container">
        <MatchCard
          team1="CSK"
          team2="MI"
          date="12 April 2026"
          venue="MA Chidambaram Stadium"
        />

        <MatchCard
          team1="CSK"
          team2="RCB"
          date="18 April 2026"
          venue="Chinnaswamy Stadium"
        />

        <MatchCard
          team1="CSK"
          team2="KKR"
          date="24 April 2026"
          venue="Eden Gardens"
        />
      </div>
    </section>
  )
}

export default Matches
