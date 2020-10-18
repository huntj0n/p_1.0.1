import React, { useState } from 'react';
import './Nav.css';

import { Link } from 'react-scroll';

import Dropdown from './Dropdown';

function Nav() {

    const [navbar, setNavbar] = useState(false)
    const [dropdown, setDropdown] = useState(false)

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
            <input className='mobile__btn' id='mobile__toggle' type="checkbox" onClick={()=>{setDropdown(!dropdown)}}/>
            <label htmlFor="mobile__toggle"></label>


            {dropdown ? <Dropdown/> : null}

            <ul className="header__navItems">
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
