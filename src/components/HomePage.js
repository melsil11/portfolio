import Picture from '../images/profilepic.png'
import Skills from './Skills'
import '../App.css'
import ReactGA from 'react-ga';

const HomePage = () => {
    return (
        <>
        <div className='homepage-container'>
            <img src={ Picture } className='profileimage' alt='profilepic'/>
            <div className='intro'>
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