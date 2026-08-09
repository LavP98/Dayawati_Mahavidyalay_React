import { useState } from 'react'

interface AdmissionModalProps {
  onClose: () => void
}

export default function AdmissionModal({ onClose }: AdmissionModalProps) {
  const [english, setEnglish] = useState(true)

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="admission-title">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="admission-title">{english ? 'Notice' : 'सूचना'}</h2>
          <button type="button" className="lang-toggle" onClick={() => setEnglish((v) => !v)}>
            {english ? 'हिन्दी' : 'English'}
          </button>
        </div>

        <div className="modal-body">
          {english ? (
            <>
              <h3 className="flash-heading">Limited Seats Available</h3>
              <p className="blink-text admission-content">
                Admission open on limited seats BA _ Hindi, English, Sanskrit, Geography, Home
                Science, Sociology, Education B.Sc _ Physics, Chemistry, Zoology, Botany,
                Mathematics B.Sc- Agriculture Course
              </p>
            </>
          ) : (
            <>
              <h3 className="flash-heading">सीमित सीटें उपलब्ध</h3>
              <p className="blink-text admission-content">
                प्रवेश प्रारंभ सीमित सीटो पर बी ए _हिंदी,अंग्रेजी, संस्कृत,भूगोल,गृह विज्ञान,
                समाजशास्त्र, शिक्षा शास्त्र बी एस सी _ भौतिक विज्ञान, रसायन विज्ञान, जन्तु
                विज्ञान, वनस्पति विज्ञान, गणित बी एस सी- कृषि पाठ्यक्रम
              </p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="modal-close-btn" onClick={onClose}>
            {english ? 'Close' : 'X'}
          </button>
        </div>
      </div>
    </div>
  )
}
