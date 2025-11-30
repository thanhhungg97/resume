import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <div className="resume-container">
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
      </div>
    </div>
  )
}

export default App

