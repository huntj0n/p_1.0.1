import React, { useState } from 'react';
import './Nav.css';

import { Link } from 'react-scroll';

function Nav() {

    const [navbar, setNavbar] = useState(false)

    const changeNavBackground = () => {
        if ( window.scrollY >= 400) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavBackground)

    // const styles = {
    //     textDecoration: 'none',
    //     textTransform: 'uppercase',
    //     transition: '0.2s',
    //     color: '#f4f4f4',
        
    // }


    return (
        <nav className={navbar ? 'navbar active': 'navbar'}>
            <input className='mobile__btn' id='mobile__toggle' type="checkbox"/>
            <label htmlFor="mobile__toggle"></label>

            <ul className="header__navItems">
                {/* <li><a className="navLink" href="#home">Home</a></li>
                <li><a className="navLink" href="#about">About</a></li>
                <li><a className="navLink" href="#resume">Resume</a></li>
                <li><a className="navLink" href="#portfolio">Portfolio</a></li>
                <li><a className="navLink" href="#contact">Contact</a></li> */}

                <Link 
                    to='scrollHome'
                    className='navLink'
                    activeClass='activeLink'
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    spy={true}
                    // style={styles} 
                >
                    Home
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                    // style={styles} 
                >
                    About
                </Link>

                <Link 
                    to='scrollResume' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                    // style={styles} 
                >
                    Resume
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                    // style={styles} 
                >
                    Portfolio
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                    // style={styles} 
                >
                    Contact
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
