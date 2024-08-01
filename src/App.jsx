import { useState } from 'react'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
     
    </div>
  )
}

export default App
