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
                <p className='welcome-description'></p>
            </div>
        </div>
        </>
    )
}

export default HomePage