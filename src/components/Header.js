import React from 'react'
import Projects from './Projects'
import {Link} from "react-router-dom"
import { Nav } from 'react-bootstrap'



const Header = () => {
    return (
        <container className='header-container'>
            <Nav.Item className = 'p-links'>
                <Link to='/' className='heading-container'>
                    <p className='header-name'>Melanie Silva</p>
                </Link>
            </Nav.Item>
            <Nav.Item  className = 'p-links'>
                <Link to='/aboutme' className='p-links'>
                    <p>About Me</p>
                </Link>
            </Nav.Item>
            <Nav.Item  className = 'p-links'>
                <Link to='/projects' className='p-links'>
                    <p>Projects</p>
                    {/* need to add link address for the updated resume */}
                </Link>
            </Nav.Item>  
            <Nav.Item  className = 'p-links'>  
                <p><a href='' target="_blank" className='p-links'>Resume</a></p>
            </Nav.Item>
            <Nav.Item  className = 'p-links'>
                <p><a href='https://www.linkedin.com/in/melanie-silva-ms' target="_blank" className='p-links'>LinkedIn</a></p>
            </Nav.Item>
            <Nav.Item  className = 'p-links'>
                <p><a href='https://github.com/melsil11' target="_blank" className='p-links'>Github</a></p>
            </Nav.Item >
        </container>
    )
} 
 

export default Header