import { logoUrl } from '../data/siteData'

export default function Logo() {
  return (
    <div className="logo-section">
      <div className="logo-frame">
        <img src={logoUrl} alt="Dayawati Mahavidyalay Logo" className="logo-image" />
      </div>
      <div className="logo-text">
        <h1>Dayawati Mahavidyalay</h1>
        <p>Rooted in Ayodhya&apos;s heritage, shaping tomorrow&apos;s leaders</p>
      </div>
    </div>
  )
}
