import React from 'react'
import {Link} from "react-router-dom"
import { Nav } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'



const Item =  (
    <>
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

            </Link>
                                {/* need to add link address for the updated resume */}
        </Nav.Item>  
        <Nav.Item  className = 'p-links'>  
            <p><a href='' target="_blank" className='p-links'rel="noreferrer">Resume</a></p>
        </Nav.Item>
        <Nav.Item  className = 'p-links'>
            <p><a href='https://www.linkedin.com/in/melanie-silva-ms' target="_blank" className='p-links'rel="noreferrer">LinkedIn</a></p>
        </Nav.Item>
        <Nav.Item  className = 'p-links'>
            <p><a href='https://github.com/melsil11' target="_blank" rel="noreferrer"className='p-links'>Github</a></p>
        </Nav.Item >
    </>
    )

const Header = () => (
	<Navbar variant='dark' expand='md'className='m-2'id='header-container'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' id='toggle'/>
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto container-fluid d-flex justify-content-between'>
				{ Item }
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
				
				


