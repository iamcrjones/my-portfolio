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
      <div className="wrapper">
        <h1 className="greet">Greetings! My name is</h1>
        <h1 className="header" >Cameron</h1>
        <h1 className="header2" >Jones</h1>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
