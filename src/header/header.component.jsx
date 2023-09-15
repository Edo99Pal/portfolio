import React from 'react';
import './header.css';
import Propic from '../assets/images/propic.png';

const Header = () => {
    return(
        <div className="header">
            <div className="up">
            </div>
            <div className="propic">
                <div className="hover">
                <a href="#resume">View Resume</a>
                    <img src={ Propic } alt="propic"/>
                </div>
            </div>
            <div className="down">
                <h1>Edoardo Palamito</h1>
                <h2>Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default Header;