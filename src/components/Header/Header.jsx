import { personalInfo } from '../../data/resumeData'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">{personalInfo.name}</h1>
      <p className="title">{personalInfo.title}</p>
      <div className="contact-info">
        <span>{personalInfo.email}</span>
        <span>•</span>
        <span>{personalInfo.phone}</span>
        {personalInfo.location && (
          <>
            <span>•</span>
            <span>{personalInfo.location}</span>
          </>
        )}
        {personalInfo.linkedin && (
          <>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </>
        )}
        {personalInfo.github && (
          <>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          </>
        )}
      </div>
    </header>
  )
}

export default Header

