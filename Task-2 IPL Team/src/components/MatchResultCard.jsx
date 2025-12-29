import '../styles/matchResultCard.css'

function MatchResultCard({ date, venue, opponent, result, score }) {
  return (
    <div className="result-card">
      <p className="result-date">{date} | {venue}</p>

      <h3>VS {opponent}</h3>

      <p className="result-score">{score}</p>

      <span className="result-badge">{result}</span>
    </div>
  )
}

export default MatchResultCard
