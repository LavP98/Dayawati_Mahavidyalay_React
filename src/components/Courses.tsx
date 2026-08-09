import { useState } from 'react'
import { courseDetails } from '../data/siteData'

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const toggleCourse = (courseName: string) => {
    setExpandedCourse((current) => (current === courseName ? null : courseName))
  }

  return (
    <section id="courses" className="section courses-section">
      <div className="section-header">
        <h2>Courses</h2>
        <p>Explore undergraduate programmes offered at Dayawati Mahavidyalay</p>
      </div>

      <div className="courses-list">
        {courseDetails.map((course) => {
          const isExpanded = expandedCourse === course.courseName

          return (
            <div key={course.courseName} className="course-item">
              <button
                type="button"
                className="course-toggle"
                onClick={() => toggleCourse(course.courseName)}
                aria-expanded={isExpanded}
              >
                <span>{course.displayName}</span>
                <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
              </button>

              {isExpanded && (
                <div className="course-details">
                  <p className="course-duration">Duration — {course.duration}</p>
                  {course.subjects && (
                    <ul className="subjects-list">
                      {course.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
