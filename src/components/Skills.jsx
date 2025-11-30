import './Section.css'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Core Skills",
      skills: ["Data Structure and Algorithms", "Problem-Solving", "Clean code and clean architecture", "Java Core", "System design"]
    },
    {
      category: "Frameworks & Technologies",
      skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Vertx", "Apache Thrift"]
    },
    {
      category: "Databases & Messaging",
      skills: ["MySQL", "PostgreSQL", "Redis", "Kafka", "RabbitMQ"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Git"]
    }
  ]

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

