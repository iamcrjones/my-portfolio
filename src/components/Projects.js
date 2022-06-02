import React from 'react';
import list from '../data/ProjectData.json'
const Projects = () => {
    return(
        <>
            <div id="projectContainer">
                    <div className="banner">
                        <h2>Projects</h2>
                    </div>
                    <div className="cardContainer">
                        {list.map(project => <div className="projectCard" key={project.id}>
                            <p>insert project img here</p>
                            <h4>Name:</h4>
                            <p>{project.name}</p>
                            <p>description here</p>
                        </div>)}
                    </div>
            </div>
        </>
    )
}
export default Projects;