import React, { useEffect, useState } from 'react'
//import Navigation2 from './Navigation2'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
//import GlobalStyles from '../styled/Global.style.js'
import TemporaryDrawer from './Drawer.js'
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles } from '../styled/Global.style.js'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')){
      return localStorage.getItem('theme')
    } else {
      return 'light'
    }
  })

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const iconToggle = () => {
    if(theme === 'light'){
      return <LightModeIcon fontSize="large"/>
    }else {
      return <NightlightIcon fontSize="large"/>
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <button onClick={() => themeToggle()}>hello</button> */}
        <TemporaryDrawer toggle={themeToggle} icon={iconToggle}/>
        <div className="wrapper">
          <h1 className="greet">Greetings! My name is</h1>
          <h1 className="header" >Cameron</h1>
          <h1 className="header2" >Jones</h1>
        </div>
        <About />
        <Projects />
        <Contact />
        <h4>Website is still under construction 🛠</h4>
      </ThemeProvider>
    </>
  )
}

export default App
