import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Krabbypatty = styled.div`
   
    height: 1.3rem;
    width: 2rem;
    position: absolute;
    left: 15px;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    div {
        width: 1.3em;
        height: 0.1em;
        background-color: #f4f4f4;
        display: block;
        transform-origin: 1px;
        transition: all 0.5s var(--animation__curve);

        &:nth-child(1){
            transform: ${({ dropdown }) => dropdown ? 'rotatez(45deg)' : 'rotate(0deg)'};
        }
        &:nth-child(2){
            background-color: ${({ dropdown }) => dropdown ? 'transparent' : '#f4f4f4'};
        }
        &:nth-child(3){
            transform: ${({ dropdown }) => dropdown ? 'rotatez(-45deg)' : 'rotate(0deg)'};
        }
    }
`


function Dropdown() {

    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className='dropdown'>

        <Krabbypatty 
            className="krabbypatty"
            dropdown={dropdown}
            onClick={ () => {setDropdown(!dropdown)} }
        >
            <div/>
            <div/>
            <div/>
        </Krabbypatty>

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
                    onClick={ () => {setDropdown(!dropdown)} } 
                >
                    Home
                </Link>

                <Link 
                    to='scrollAbout' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={ () => {setDropdown(!dropdown)} }  
                >
                    About
                </Link>

                <Link 
                    to='scrollResume' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={ () => {setDropdown(!dropdown)} }  
                >
                    Resume
                </Link>

                <Link 
                    to='scrollPortfolio' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={ () => {setDropdown(!dropdown)} }  
                >
                    Portfolio
                </Link>
                
                <Link 
                    to='scrollContact' 
                    className='navLink' 
                    smooth={true} 
                    duration={1000} 
                    delay={100}
                    onClick={ () => {setDropdown(!dropdown)} }  
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
