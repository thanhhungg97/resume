import './Section.css'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineering",
      company: "NOVAID",
      location: "",
      period: "2022/07 - Present",
      description: [
        "Design architecture and implementation backend API for Aquacity Smart City using Spring Boot, Spring Security, Spring Data JPA, and Postgres SQL",
        "Continuous research about various technology: Design Patterns, Databases, ORM (Hibernate), and Security(OWASP Top Ten) when designing services, and implementing API, gain more knowledge about technology to solve the facing problem",
        "Research and apply Hexagon Architecture with Domain-Driven Design tactical with improving the structure and clean code",
        "Discussing, feedback with Business Analytics to verify and clarify the requirement, helping BA improve business workflow",
        "Integration API with 1 Front-End and 5 Mobile developers"
      ]
    },
    {
      title: "Java Developer",
      company: "MOMO",
      location: "",
      period: "2021/09 - 2022/06",
      description: [
        "Designed reactive microservice based on Vertx, Kafka, and RabbitMQ",
        "Building rate limits service for login with reducing spam login",
        "Investigate Production memory leak using Heap dump and Memory Analyzer",
        "Integration with KYC and AI services, and improving flow for Fraud Detection services, helping reduce CS team workload to 15%",
        "Working with DevOps to move the Risk System to a new K8S namespace without downtime",
        "Performed unit testing, applying TDD",
        "Involved in the release, and deployment of the application on the Developer, Production environment",
        "Participating in training new members and code reviews",
        "Involved in documenting technical design documents",
        "Have experience, and knowledge working with Docker, Kubernetes, and CI-CD"
      ]
    },
    {
      title: "Software Engineer",
      company: "VNG Corporation",
      location: "",
      period: "2019/03 - 2021/08",
      description: [
        "Redesign Billing Service helping solve the critical bug",
        "Improving real-time inventory for User balance",
        "Split Billing System to Billing Service and Billing Report Service without bugs, downtime and improving performance, and reducing request latency by 50%",
        "Profiling, optimizing code and examining the key factor affecting memory performance",
        "Setting monitoring monitor using Prometheus and Grafana for Billing Service",
        "Implementing new features, deploying and monitoring systems"
      ]
    }
  ]

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

