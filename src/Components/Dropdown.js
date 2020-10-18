import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-scroll';

function Dropdown() {

    const [dropdown, setDropdown] = useState(false)

    

    return (
        <nav className='dropdown'>

        <input className='mobile__btn' id='mobile__toggle' type="checkbox" onClick={()=>{setDropdown(!dropdown)}}/>
        <label htmlFor="mobile__toggle"></label>

        {dropdown ? 
        (
            <div className="menu">
                <Link 
                    to='scrollHome'
                    className='navLink'
                    activeClass='activeLink'
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setDropdown(!dropdown)}} 
                >
                    Home
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setDropdown(!dropdown)}}  
                >
                    About
                </Link>

                <Link 
                    to='scrollResume' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setDropdown(!dropdown)}}  
                >
                    Resume
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setDropdown(!dropdown)}}  
                >
                    Portfolio
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setDropdown(!dropdown)}}  
                >
                    Contact
                </Link>
            </div>
        ):(
            null
        )}
                
        </nav>
    )
}

export default Dropdown
