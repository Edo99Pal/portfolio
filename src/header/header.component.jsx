import React from 'react';
import './header.css';
import logo from '../assets/images/profilo.jpg';
import html from '../assets/images/htmlcssjs.png';
import typescript from '../assets/images/typescript.png';
import react from '../assets/images/react.svg';
import angular from '../assets/images/angular.png';
import laravel from '../assets/images/laravel.png';

const Header = () => {
    return(
        <div className="header">
            <div className="header-up">
                <h1>Hi! I Am <br/> Edoardo Palamito </h1>
                <span className="job">Full Stack Developer</span> 
                <p>Working with the main Front End technologies for 4 years</p>
                <a  href=" #hire-me-form" class="hire-me-button">Hire me</a>
                <a href="#projects" class="projects-button">Projects</a>
                <img src={logo} className="propic" alt="Edoardo Palamito"/>
            </div>
            <div className="header-down">
                <h3>Coding Knowledges</h3>
                <img className="language html" src={html} alt="html5 css3 javascript"/>
                <img className="language" src={typescript} alt="typescript"/>
                <img className="language" src={react} alt="react"/>
                <img className="language" src={angular} alt="angular"/>
                <img className="language laravel" src={laravel} alt="laravel"/>
            </div>
        </div>
    )
}

export default Header;