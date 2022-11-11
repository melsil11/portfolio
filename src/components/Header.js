import React from 'react'
import Projects from './Projects'
import {Link} from "react-router-dom"



const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <Link to='/' className='heading-container'>
                    <h1 className='header-name'>Melanie Silva</h1>
                </Link>
            </div>
            <div className = 'links'>
                <Link to='/aboutme' className='p-links'>
                    <p>About Me</p>
                </Link>
                <Link to='/projects' className='p-links'>
                    <p>Projects</p>
                    {/* need to add link address for the updated resume */}
                </Link>
                <p><a href='' target="_blank" className='p-links'>Resume</a></p>
                <p><a href='https://www.linkedin.com/in/melanie-silva-ms' target="_blank" className='p-links'>LinkedIn</a></p>
                <p><a href='https://github.com/melsil11' target="_blank" className='p-links'>Github</a></p>
            </div>
        </div>
    )
} 
 

export default Header