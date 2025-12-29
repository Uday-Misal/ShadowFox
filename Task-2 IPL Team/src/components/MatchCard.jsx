import '../styles/matchCard.css'

function MatchCard({ team1, team2, date, venue }) {
  return (
    <div className="match-card">
      <h3>{team1} vs {team2}</h3>
      <p className="match-date">{date}</p>
      <p className="match-venue">{venue}</p>
    </div>
  )
}

export default MatchCard
