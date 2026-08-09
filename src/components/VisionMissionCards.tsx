import { visionMissionCards } from '../data/siteData'

export default function VisionMissionCards() {
  return (
    <section className="section cards-section">
      <div className="section-header">
        <h2>Our Foundation</h2>
        <p>Inspired by the spiritual legacy of Ayodhya and the pursuit of excellence</p>
      </div>

      <div className="cards-grid">
        {visionMissionCards.map((card) => (
          <article key={card.title} className="info-card">
            <div className="info-card-header">{card.title}</div>
            <div className="info-card-body">
              {Array.isArray(card.content) ? (
                card.content.map((item) => (
                  <div key={item.author} className="belief-item">
                    <p>&ldquo;{item.quote}&rdquo;</p>
                    <cite>— {item.author}</cite>
                  </div>
                ))
              ) : (
                <p>&ldquo;{card.content}&rdquo;</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
