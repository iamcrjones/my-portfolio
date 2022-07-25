import { Button, Card, CardContent, Link } from '@mui/material';
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
                        {list.map(project =>
                            <Card key={project.id}>
                                <CardContent>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <Button>
                                            <Link href={project.url} rel="noreferrer" target="_blank" underline="none" color="#fff">GitHub Repo</Link>
                                    </Button>
                                    {project.deployed?
                                        <Button>
                                            <Link href={project.deployed} rel="noreferrer" target="_blank" underline="none" color="#fff">Deployed Site</Link>
                                        </Button>
                                        :
                                        ""
                                    }

                                </CardContent>
                            </Card>
                        )}
                    </div>
            </div>
        </>
    )
}
export default Projects;
