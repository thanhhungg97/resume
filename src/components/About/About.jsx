import { about } from '../../data/resumeData'
import '../../styles/shared.css'

const About = () => {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>
      <p className="section-content">
        {about}
      </p>
    </section>
  )
}

export default About

