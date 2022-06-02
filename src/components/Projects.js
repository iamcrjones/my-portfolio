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
                            <div className="project">
                                <div className="card-front">
                                    <h3>{project.name}</h3>
                                    <img src={project.image} alt='github'/>
                                </div>
                                <div className="card-back">
                                    <p>description here</p>
                                    <a href={project.url} rel="noreferrer" target='_blank'>Link to repo</a>
                                </div>
                            </div>
                        </div>)}
                    </div>
            </div>
        </>
    )
}
export default Projects;