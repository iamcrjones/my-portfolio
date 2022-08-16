import { Button, Card, CardContent } from '@mui/material';
import React from 'react';
import list from '../data/ProjectData.json'
import HTML from '../assets/html5-plain.svg'
import CSS from '../assets/css3-plain.svg'
import JavaScript from '../assets/javascript-plain.svg'
import Ruby from '../assets/Ruby.svg'
import react from '../assets/react-original.svg'
import Postgres from '../assets/postgresql-plain.svg'
import Rails from '../assets/rails-plain.svg'

const Projects = () => {

    const techs = {
        HTML: HTML,
        CSS: CSS,
        Ruby: Ruby,
        JS: JavaScript,
        React: react,
        Postgres: Postgres,
        Rails: Rails
    }
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
                                    {project.stack.map(tech =>
                                        <img key={tech}className="stackIcon" src={techs[tech]} alt="icon"/>
                                    )}
                                    <Button>
                                            More
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>
            </div>
        </>
    )
}
export default Projects;
