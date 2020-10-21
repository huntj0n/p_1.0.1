import React, { useState } from 'react';
import './Nav.css';

import { Link } from 'react-scroll';

import Dropdown from './Dropdown';

function Nav() {

    const [navbar, setNavbar] = useState(false)

    const changeNavBackground = () => {
        if ( window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const width = window.innerWidth;

    window.addEventListener('scroll', changeNavBackground)

    return (
        <nav className={navbar ? 'navbar active': 'navbar'}>
            
            {width > 500 ? null : <Dropdown />}

            <ul className="header__navItems">
                <Link 
                    to='scrollHome'
                    className='navLink'
                    activeClass='activeLink'
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    spy={true}
                >
                    Home
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                >
                    Portfolio
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
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
                >
                    Resume
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                    activeClass='activeLink'
                    spy={true}
                >
                    Contact
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
