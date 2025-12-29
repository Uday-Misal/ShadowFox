import '../styles/fanzone.css'
import Celebration from '../assets/celebration.webp'
import finisher from '../assets/finisher.webp'
import batting from '../assets/batting.webp'

const videos = [
  {
    title: "CSK Batting – IPL 2023",
    description:
      "An inside look at CSK’s dressing room celebrations after a thrilling IPL victory.",
    image:
      batting,
    link: "https://www.youtube.com/results?search_query=CSK+dressing+room+celebration"
  },
  {
    title: "MS Dhoni – Finishing in Style 💛",
    description:
      "When pressure is highest, Dhoni delivers. Relive iconic finishing moments.",
    image:
      finisher,
    link: "https://www.youtube.com/results?search_query=MS+Dhoni+finishing+in+style"
  },
  {
    title: "CSK IPL Trophy Celebrations 🏆",
    description:
      "Celebrations, emotions, and unforgettable moments from CSK’s IPL triumphs.",
    image:
      Celebration,
    link: "https://www.youtube.com/results?search_query=CSK+IPL+trophy+celebration"
  }
]

function FanZone() {
  return (
    <div className="page csk-tv">
      <h1 className="tv-title">CSK Highlits</h1>
      <p className="tv-subtitle">
       interviews & match moments.
      </p>

      <div className="tv-grid">
        {videos.map((video, index) => (
          <div className="tv-card" key={index}>
            <img src={video.image} alt={video.title} />

            <div className="tv-content">
              <h3>{video.title}</h3>
              <p>{video.description}</p>

              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tv-btn"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FanZone
