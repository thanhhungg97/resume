import './Section.css'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      name: "TOEIC",
      date: "4/2019",
      score: "700"
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-list">
        {certificates.map((cert, idx) => (
          <div key={idx} className="certificate-item">
            <div className="certificate-header">
              <h3 className="certificate-name">{cert.name}</h3>
              <span className="certificate-date">{cert.date}</span>
            </div>
            {cert.score && <p className="certificate-score">Score: {cert.score}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates

