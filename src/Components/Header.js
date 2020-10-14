import React from 'react';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a className="mobile__btn" href="#header" title="Show Navigation">Show Navigation</a>
                <a className="mobile__btn" href="#header__nav" title="Hide Navigation">Hide Navigation</a>
            </nav>

            <ul className="header__navItems">
                <li><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header
