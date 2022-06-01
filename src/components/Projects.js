import React from 'react';
import list from '../data/ProjectData.json'
const Projects = () => {
    console.log(list[0].name)
    console.log(list[1].name)
    console.log(list[2].name)
    return(
        <>
            <div id="projectContainer">
                    <div className="banner">
                        <h2>Projects</h2>
                    </div>
                    <div>
                        <p>here are my projects</p>
                        <p></p>
                    </div>
            </div>
        </>
    )
}
export default Projects;