import { skillCategories } from '../../data/resumeData'
import '../../styles/shared.css'
import './Skills.css'

const Skills = () => {
  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-title">{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

