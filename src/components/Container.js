import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
//import ScrollTest from './ScrollTest'
//import{ useRef } from 'react'
 async function github() {
        let pull = await fetch('https://api.github.com/users/iamcrjones/starred')
        let pullData = await pull.json()
        console.log(pullData)
        let arr = []
        for (let i=0; i<pullData.length; i++) {
            arr.push(pullData[i].name)
        }
        console.log(arr)
        return arr;
    }
    const repos = github

const Container = () => {
    return(
        <>
            <h1 id="header" >Cameron Jones</h1>
            <Navigation />
            <About />
            <Projects> </Projects>
            <Contact />
        </>
    )
}
export default Container