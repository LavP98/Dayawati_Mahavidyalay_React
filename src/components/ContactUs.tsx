import { contactInfo } from '../data/siteData'

export default function ContactUs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact_us" className="section contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Visit us in the sacred city of Ayodhya</p>
      </div>

      <div className="contact-grid">
        <div className="map-container">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dayawati Mahavidyalay Location"
          />
        </div>

        <address className="contact-details">
          <strong>{contactInfo.address}</strong>
          <div className="contact-row">
            <span className="contact-label">Tel:</span>
            {contactInfo.phones.map((phone, index) => (
              <span key={phone}>
                {index > 0 && ' / '}
                <a href={`tel:${phone.replace(/\s|\+91\s*-\s*/g, '')}`}>{phone}</a>
              </span>
            ))}
          </div>
          <div className="contact-row">
            <span className="contact-label">E-Mail:</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
        </address>
      </div>

      <div className="scroll-top-inline">
        <button type="button" className="scroll-top-btn-inline" onClick={scrollToTop}>
          Scroll to the top
        </button>
      </div>

      <footer className="site-footer">
        <p>© Dayawati Mahavidyalay</p>
      </footer>
    </section>
  )
}
