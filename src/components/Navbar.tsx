import { useState } from 'react'
import { navItems } from '../data/siteData'

interface NavbarProps {
  isMobile: boolean
  onNavClick: (navItem: string) => void
}

export default function Navbar({ isMobile, onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (navItem: string) => {
    setMenuOpen(false)
    onNavClick(navItem)
  }

  if (isMobile) {
    return (
      <nav className="navbar mobile-nav">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
          Menu
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button key={item.navItem} type="button" onClick={() => handleClick(item.navItem)}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    )
  }

  return (
    <nav className="navbar desktop-nav">
      {navItems.map((item) => (
        <button key={item.navItem} type="button" onClick={() => handleClick(item.navItem)}>
          {item.name}
        </button>
      ))}
    </nav>
  )
}
