import React from 'react';
import './Dropdown.css';
import { Link } from 'react-scroll';

function Dropdown() {

    

    return (
        <div className='dropdown'>
                <Link 
                    to='scrollHome'
                    className='navLink'
                    activeClass='activeLink'
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                >
                    Home
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                >
                    About
                </Link>

                <Link 
                    to='scrollResume' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                >
                    Resume
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                >
                    Portfolio
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100} 
                >
                    Contact
                </Link>
        </div>
    )
}

export default Dropdown
