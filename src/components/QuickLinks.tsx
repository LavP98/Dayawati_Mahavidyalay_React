import { quickLinks } from '../data/siteData'

export default function QuickLinks() {
  return (
    <section id="quick-links" className="section quick-links-section">
      <div className="section-header">
        <h2>Quick Links</h2>
        <p>University portals and student services at your fingertips</p>
      </div>

      <div className="quick-links-list">
        {quickLinks.map((link) => (
          <a
            key={link.link}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-link-item"
          >
            <span className="link-arrow">→</span>
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}
