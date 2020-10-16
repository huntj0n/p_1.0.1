import React from 'react';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <input className='mobile__btn' id='mobile__toggle' type="checkbox"/>
            <label htmlFor="mobile__toggle"></label>

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
