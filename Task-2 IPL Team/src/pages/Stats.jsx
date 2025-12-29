import { useState } from 'react'
import StatsHero from '../components/StatsHero'
import MatchResults from '../components/MatchResults'
import PlayerMetrics from '../components/PlayerMetrics'

function Stats() {
    const [activeTab, setActiveTab] = useState('matches')

    return (
        <div className="page">
            <StatsHero activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'matches' && <MatchResults />}
            {activeTab === 'metrics' && <PlayerMetrics />}
        </div>
    )
}

export default Stats
