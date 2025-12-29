import '../styles/statsHero.css'

function StatsHero({ activeTab, setActiveTab }) {
  return (
    <section className="stats-hero">
      <div className="stats-hero-content">
        <h1>STATS</h1>
        <p>ANALYZE. DOMINATE. CONQUER.</p>

        <div className="stats-buttons">
          <button
            className={activeTab === 'matches' ? 'primary-btn' : 'secondary-btn'}
            onClick={() => setActiveTab('matches')}
          >
            MATCH CENTER
          </button>

          <button
            className={activeTab === 'metrics' ? 'primary-btn' : 'secondary-btn'}
            onClick={() => setActiveTab('metrics')}
          >
            PLAYER METRICS
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatsHero
