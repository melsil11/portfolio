import Picture from '../images/collagepictures.png'
// import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
    return (
        <>
        <div className='homepage-container'>
            <img src={ Picture } className='image' alt='collageimage'/>
            <div className='intro'>
                <p className='hello'>Hi!</p>
                <p className='hello'>I'm Melanie Silva</p>
                <p className='welcome-description'>I am a Fullstack Software Engineer with a passion for creating a more accessible world through code. My code is greatly influenced by my many years as a special education teacher developing ideas to make the world around my students more accessible and meeting each individuals needs.</p>
                <p className='welcome-description'> Let's make a change:</p>
                <p className='welcome-description'> melanie.silva2121@gmail.com </p>
            </div>
        </div>
        </>
    )
}

export default HomePage