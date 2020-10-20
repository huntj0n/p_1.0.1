import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-scroll';


function Dropdown() {

    const [dropdown, setDropdown] = useState(false)
    const [checked, setChecked] = useState(false)


    return (
        <nav className='dropdown'>

        <div className="krabbypatty"
            onClick={ () => {setDropdown(!dropdown)} }
        >
            <div></div>
            <div></div>
            <div></div>
        </div>

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
                    onClick={() => {setChecked(!checked)}} 
                >
                    Home
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setChecked(!checked)}}  
                >
                    About
                </Link>

                <Link 
                    to='scrollResume' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setChecked(!checked)}}  
                >
                    Resume
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setChecked(!checked)}}  
                >
                    Portfolio
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={() => {setChecked(!checked)}}  
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
