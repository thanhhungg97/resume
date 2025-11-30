import './Section.css'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science: Computer Science",
      school: "Bach Khoa University",
      location: "",
      period: "10/2015 - 11/2019",
      details: "GPA: 7.6"
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu, idx) => (
          <div key={idx} className="education-item">
            <div className="education-header">
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
              </div>
              <div className="education-meta">
                {edu.location && <span className="education-location">{edu.location}</span>}
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
            {edu.details && <p className="education-details">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

