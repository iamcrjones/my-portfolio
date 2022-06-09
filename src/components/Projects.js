import { Button, Link } from '@mui/material';
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
                                    <p>{project.description}</p>
                                    <div className="links">
                                        <Button>
                                            <Link href={project.url} rel="noreferrer" target="_blank" underline="none" color="#fff">View GitHub Repo</Link>
                                            {/* <a href={project.url} rel="noreferrer" target='_blank'>View GitHub Repo</a> */}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
            </div>
        </>
    )
}
export default Projects;
