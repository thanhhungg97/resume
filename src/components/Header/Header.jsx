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
      </div>
    </header>
  )
}

export default Header

