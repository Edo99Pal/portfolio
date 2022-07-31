import React from 'react';
import './projects.css';
import triptastic from '../assets/images/triptastic.png';

const Projects = () => {
    return(
        <div className="projects">
            <h3>Projects</h3>
            <div className="project">
            <a href="https://edo99pal.github.io/triptastic">Triptastic
                <img src={triptastic} alt="triptastic"/>
                <div className="used-languages">
                    <p>Sass</p>
                    <p>React</p>
                </div>
            </a>
            </div>
        </div>
    )
}

export default Projects;