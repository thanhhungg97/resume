import { experiences } from '../../data/resumeData'
import '../../styles/shared.css'
import './Experience.css'

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-meta">
                {exp.location && <span className="experience-location">{exp.location}</span>}
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

