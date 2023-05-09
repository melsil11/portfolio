import Picture from '../images/collagepictures.png'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'


ReactGA.initialize('G-9J92035WTP');
ReactGA.send("pageview");

const AboutMe = () => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/aboutme" });
    }, []);
    return (
        <div>
            <div className='homepage-container'>           
            <div>
                <img src={ Picture } className='collageImage' alt='collage'/>
                <h1 className='about-me' id= 'about-me-heading'>Hello and thanks for visiting!</h1>
                <span className='span'></span>
                <p className='about-me'> My name is Melanie Silva, and I am a Fullstack Software Engineer that is experienced in creating fullstack applications that meet the needs and expectations of clients. </p>
                <p className='about-me'> My ability to effectively communicate with my team and customers comes from my many years of experience working as a teacher which enabled me to expertly develop meaningful curriculum.</p>
                <p className='about-me'> For fun I enjoy spending as much time as I can outside, whether it is hiking with my dogs or harvesting my own produce. Many of my hobbies emulate why I love coding. I enjoy taking raw materials and building things out of them such as crafting and carpentry. </p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe