import { useEffect, useState } from 'react'
import { carouselImages } from '../data/siteData'

interface CarouselProps {
  autoPlay: boolean
}

export default function Carousel({ autoPlay }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [manualOverride, setManualOverride] = useState(false)

  const currentImage = carouselImages[currentIndex]

  useEffect(() => {
    if (!autoPlay || manualOverride) return

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [autoPlay, manualOverride])

  const goToPrevious = () => {
    setManualOverride(true)
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setManualOverride(true)
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <button
          type="button"
          className="carousel-btn prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="carousel-image-wrapper">
          <img src={currentImage.imgUrl} alt={currentImage.imgName} className="carousel-image" />
          <div className="carousel-overlay">
            <span className="carousel-caption">Campus Life at Dayawati Mahavidyalay</span>
          </div>
        </div>

        <button
          type="button"
          className="carousel-btn next"
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {carouselImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setManualOverride(true)
              setCurrentIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
