import React from 'react'
import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import GlobalStyles from '../styled/Global.style.js'
const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1 className="header" >Cameron Jones</h1>
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
