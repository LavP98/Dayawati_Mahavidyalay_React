import { pamphletUrl } from '../../data/siteData'

interface PamphletModalProps {
  onClose: () => void
}

export default function PamphletModal({ onClose }: PamphletModalProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="pamphlet-title">
      <div className="modal-content pamphlet-modal">
        <div className="modal-header">
          <h2 id="pamphlet-title">College Pamphlet</h2>
        </div>

        <div className="modal-body pamphlet-body">
          <img src={pamphletUrl} alt="Dayawati Mahavidyalay Pamphlet" className="pamphlet-image" />
        </div>

        <div className="modal-footer">
          <button type="button" className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
