import React from 'react'
//import Navigation2 from './Navigation2'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import GlobalStyles from '../styled/Global.style.js'
import TemporaryDrawer from './Drawer.js'
const App = () => {
  return (
    <>
      <GlobalStyles />
      <TemporaryDrawer />
      <h1 className="header" >Cameron Jones</h1>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
