import Picture from '../images/profilepic.webp'
import Skills from './Skills'
import '../App.css'
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
ReactGA.initialize('G-9J92035WTP');
ReactGA.send({ hitType: 'pageview', page: '/' });

const HomePage = () => {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: '/' });
        // ReactGA.pageview(window.location.pathname)
    }, []);
    return (
        <>
        <div className='homepage-container'>
            
            <div className='intro'>
            <img src={ Picture } className='profileimage' alt='profile of Melanie Silva'/>
                <p className='hello'>Hi!</p>
                <p className='hello'>I'm Melanie Silva</p>
                <p className='welcome-description'>I am a Fullstack Software Engineer with a passion for creating a more accessible world through code. My code is greatly influenced by my many years as a special education teacher developing ideas to make the world around my students more accessible and meeting each individuals needs.</p>
                <p className='welcome-description'> Let's make a change:</p>
                <p className='welcome-description'> melanie.silva2121@gmail.com </p>
                <h3 id= 'skillsHeading'> Skills </h3>
                <Skills/>
            </div>
        </div>
        </>
    )
}

export default HomePage