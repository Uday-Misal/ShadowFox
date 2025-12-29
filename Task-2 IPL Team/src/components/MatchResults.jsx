import MatchResultCard from './MatchResultCard'
import '../styles/matchResults.css'

function MatchResults() {
  return (
    <section className="results-section">
      <div className="results-grid">
        <MatchResultCard
          date="2026-04-12"
          venue="MA Chidambaram Stadium"
          opponent="Mumbai Indians"
          score="CSK 198/5 (20) | MI 175/9 (20)"
          result="WON BY 23 RUNS"
        />

        <MatchResultCard
          date="2026-04-18"
          venue="Chinnaswamy Stadium"
          opponent="RCB"
          score="CSK 182/6 (20) | RCB 170/8 (20)"
          result="WON BY 12 RUNS"
        />

        <MatchResultCard
          date="2026-04-25"
          venue="Eden Gardens"
          opponent="KKR"
          score="CSK 165/7 (20) | KKR 160/9 (20)"
          result="WON BY 5 RUNS"
        />

        <MatchResultCard
          date="2026-05-02"
          venue="Narendra Modi Stadium"
          opponent="GT"
          score="CSK 190/4 (20) | GT 172/8 (20)"
          result="WON BY 18 RUNS"
        />
      </div>
    </section>
  )
}

export default MatchResults
