export default function ScrollTopButton() {
  return (
    <button
      type="button"
      className="floating-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
