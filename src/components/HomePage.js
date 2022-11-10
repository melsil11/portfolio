import Picture from '../images/collagepictures.png'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <img src={ Picture } className='image'/>
            <div className='intro'>
                <p>Hello!</p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default HomePage