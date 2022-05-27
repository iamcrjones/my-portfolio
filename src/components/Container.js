import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
//import ScrollTest from './ScrollTest'
//import{ useRef } from 'react'

const Container = () => {
    return(
        <>
            <h1 id="header" >Cameron Jones</h1>
            <Navigation />
            <About />
            <Projects />
            <Contact />
        </>
    )
}
export default Container