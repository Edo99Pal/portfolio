import React from 'react';
import './projects.css';
import Triptastic from '../assets/images/triptastic.png';
import PlantATree from '../assets/images/plantatree.png';
import Verve from '../assets/images/verve.png';

const Projects = () => {
    return(
        <div className="projects">
            <h3>Projects</h3>
            <h2>Before my job experience</h2>
            <div className="project triptastic">
                <h4 className="triptastic-name">Triptastic</h4>
                <a href="https://edo99pal.github.io/triptastic" target="_blank">
                    <img src={ Triptastic } alt="Triptastic"/>
                    <div className="description">
                        <span>React</span><br/>
                        <span>Sass</span><br/>
                        <span>Responsive Design</span>
                    </div>
                </a>
            </div>
            <div className="project plantatree">
                <h4 className="plantatree-name">Plant A Tree</h4>
                <a href="https://edo99pal.github.io/plantatree" target="_blank">
                    <img src={ PlantATree } alt="Plant A Tree"/>
                    <div className="description">
                        <span>React</span><br/>
                        <span>CSS</span><br/>
                        <span>Responsive Design</span>
                    </div>
                </a>
            </div>
            <h2>After 6 months of experience</h2>
            <div className="project verve">
                <h4 className="verve-name">Vérve</h4>
                <a href="https://edo99pal.github.io/verve" target="_blank">
                    <img src={ Verve } alt="Vérve"/>
                    <div className="description">
                        <span>Angular</span><br/>
                        <span>SASS</span><br/>
                        <span>Responsive Design</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;