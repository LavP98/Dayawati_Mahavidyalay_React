import { useEffect, useState } from 'react'
import AdmissionModal from './components/modals/AdmissionModal'
import PamphletModal from './components/modals/PamphletModal'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import VisionMissionCards from './components/VisionMissionCards'
import Courses from './components/Courses'
import QuickLinks from './components/QuickLinks'
import ContactUs from './components/ContactUs'
import ScrollTopButton from './components/ScrollTopButton'

type ModalStep = 'admission' | 'pamphlet' | 'closed'

function App() {
  const [modalStep, setModalStep] = useState<ModalStep>('admission')
  const [carouselAutoPlay, setCarouselAutoPlay] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('only screen and (max-width: 912px)').matches)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (navItem: string) => {
    if (navItem === 'contact_us') {
      document.getElementById('contact_us')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const offsets: Record<string, { desktop: number; mobile: number }> = {
      courses: { desktop: 700, mobile: 900 },
      'quick-links': { desktop: 1000, mobile: 1300 },
    }

    const target = offsets[navItem]
    if (!target) return

    window.scrollTo({
      top: isMobile ? target.mobile : target.desktop,
      behavior: 'smooth',
    })
  }

  const closeAdmissionModal = () => {
    setModalStep('pamphlet')
  }

  const closePamphletModal = () => {
    setModalStep('closed')
    setCarouselAutoPlay(true)
  }

  return (
    <div className="app">
      {modalStep === 'admission' && <AdmissionModal onClose={closeAdmissionModal} />}
      {modalStep === 'pamphlet' && <PamphletModal onClose={closePamphletModal} />}

      <header className="site-header">
        <Logo />
        <div className="affiliation-banner">
          <span className="om-symbol">ॐ</span>
          Affiliated with DR. RAMMANOHAR LOHIA AVADH UNIVERSITY, AYODHYA, U.P.
          <span className="om-symbol">ॐ</span>
        </div>
      </header>

      <Navbar isMobile={isMobile} onNavClick={handleNavClick} />

      <main>
        <Carousel autoPlay={carouselAutoPlay} />
        <VisionMissionCards />
        <Courses />
        <QuickLinks />
        <ContactUs />
      </main>

      {showScrollTop && isMobile && <ScrollTopButton />}
    </div>
  )
}

export default App
