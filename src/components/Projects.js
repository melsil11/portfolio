import '../App.css'
import { Carousel } from "react-bootstrap"
import Picture from '../images/The-Good-Avocado.png'
import Picture1 from '../images/Family-Friends-Recipe-Collection.png'
import Picture2 from '../images/Pie-api.png'
import Picture3 from '../images/Find-the-Puppy.png'
import Picture4 from '../images/stranger-things.png'
import pawsitters from '../images/pawsitters.png'



const Projects = () => {
    return (
        <>
        <h2 id='projects-heading'>Click through the images to see some of my projects!</h2>
            <section className='projects'>
            <Carousel className='carousel' interval={5000}>
                <Carousel.Item>
                    <a href='https://thegoodavocado.netlify.app'target='_blank' rel="noreferrer">
                        <img id='avo-image'
                        className="d-block w-100 carousel-img"
                        src={Picture}
                        alt='the-good-avocado'
                        />
                    </a>
                    <h3>The Good Avocado!</h3>
                    <p className ='projects-descriptions'>
                    This group project is a Full Stack MERN application utilzing MongoDB, Express, React, Node, and Cloudinary. This application allows users to view an index of restaurants as well as the ability to view more details about the restaurants and leave reviews with uploaded images.
                    </p>
                    <p className='deploylinks'>     
                        <a href='https://thegoodavocado.netlify.app' target='_blank'rel="noreferrer"className='deployed'>Deployed Link</a> <span class='span'></span>
                        <a href='https://github.com/melsil11/Api-theGoodAvocado' target='_blank'rel="noreferrer"className='deployed'>GitHub-API Link</a> <span class='span'></span>
                        <a href='https://github.com/melsil11/Client-theGoodAvocado' target='_blank'rel="noreferrer"className='deployed'>GitHub-Client Link</a>
                    </p> 
                    <span class='span'></span>
                </Carousel.Item> 
                <Carousel.Item>
                    <a href='https://family-friends-recipe-collection.fly.dev'target='_blank'rel="noreferrer" >
                        <img id='recipe-image'
                        className="d-block w-100 carousel-img"
                        src={Picture1}
                        alt='recipe-collection'
                        />
                    </a>
                    <h3>Family and Friends Recipe Collection</h3>
                    <p className ='projects-descriptions'>This Full Stack project utilizes MongoDB, Express, LiquidJS, HTML, CSS, and JavaScript. User can securely create an account and create and view recipes, as well as leave notes about individual recipes.
                    </p>
                    <p className='deploylinks'>   
                        <a href='https://family-friends-recipe-collection.fly.dev' rel="noreferrer"target='_blank'className='deployed'>DeployedLink</a> <span class='span'></span>
                        <a href='https://github.com/melsil11/Family-and-Friends-Recipe-Tracker' target='_blank'rel="noreferrer"className='deployed'>GitHub Link</a>
                    </p>
                    <span class='span'></span>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://pie-application.fly.dev' target='_blank'rel="noreferrer">
                        <img id='pie-image'
                        className="d-block w-100 carousel-img"
                        src={Picture2}
                        alt='pie'
                        />
                    </a>
                    <h3>Pie API</h3>
                    <p className ='projects-descriptions'>This single resource API utilizes MongoDB, Express and LiquidJS, HTML, CSS, and JavaScript. It has full CRUD abilities and an easy-to-follow user experience. It allows users to sign up securely and view and create pies. It utilizes models and subdocuments. 
                    </p> 
                    <p className='deploylinks'>  
                        <a href='https://pie-application.fly.dev' target='_blank'rel="noreferrer"className='deployed'>DeployedLink</a> <span class='span'></span>
                        <a href='https://github.com/melsil11/Single-Resource-API-Pies' target='_blank'rel="noreferrer"className='deployed'>GitHub Link</a> 
                    </p>
                    <span class='span'></span>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://melsil11.github.io/Find-the-Puppy' target='_blank'rel="noreferrer">
                        <img id='find-the-puppy-image'
                        className="d-block w-100 carousel-img"
                        src={Picture3}
                        alt="puppy"
                        />
                    </a>
                    <h3>Find the Puppy!</h3>
                    <p className ='projects-descriptions'>This front-end project was built using HTML, CSS, and vanilla JavaScript.  The code randomizes the order of the cards and allows the user to play against a computer. The code is simple, clean, and dry.
                    </p>
                    <p className='deploylinks'> 
                        <a href='https://melsil11.github.io/Find-the-Puppy' target='_blank'rel="noreferrer"className='deployed'>DeployedLink</a><span class='span'></span>
                        <a href='https://github.com/melsil11/Find-the-Puppy' target='_blank'rel="noreferrer"className='deployed'>GitHub Link</a>
                    </p>  
                    <span class='span'></span>             
                </Carousel.Item>
                <Carousel.Item>
                <a href='https://melsil11.github.io/Stranger-Things' target='_blank'rel="noreferrer">
                    <img id='stranger-image'
                    className="d-block w-100 carousel-img"
                    src={Picture4}
                    alt="stranger-things"
                    />
                    </a>
                    <h3> Stranger Things Fan Page</h3>
                    <p className ='projects-descriptions'>This HTML, CSS, and JavaScript fan page utilizes basic componets of each language. It has DOM manipulation as well and clean code.
                    </p>
                    <p className='deploylinks'>
                        <a href='https://melsil11.github.io/Stranger-Things' rel="noreferrer"target='_blank'className='deployed'>DeployedLink</a>  <span class='span'></span>
                        <a href='https://github.com/melsil11/Stranger-Things' target='_blank'rel="noreferrer"className='deployed'>GitHub Link</a>
                    </p>
                    <span class='span'></span>
                </Carousel.Item>
                <Carousel.Item>
                <a href='https://pawsitters.netlify.app/' target='_blank'rel="noreferrer">
                    <img id='pawsitters'
                    className="d-block w-100 carousel-img"
                    src={pawsitters}
                    alt="pawsitters"
                    />
                    </a>
                    <h3> PawSitters</h3>
                    <p className ='projects-descriptions'>This group project  app was developed using Python, Django, and React. It was designed for users to book and review pet sitters. It has full CRUD capabilities. 
                    </p>
                    <p className='deploylinks'>
                        <a href='https://pawsitters.netlify.app/' rel="noreferrer"target='_blank'className='deployed'>DeployedLink</a>  <span class='span'></span>
                        <a href='https://github.com/melsil11/react-pawsitters' target='_blank'rel="noreferrer"className='deployed'>GitHub Client Link</a> <span class='span'></span>
                        <a href='https://github.com/melsil11/django-pawsitters' target='_blank'rel="noreferrer"className='deployed'>GitHub API Link</a>
                    </p>
                    <span class='span'></span>
                </Carousel.Item>
            </Carousel>
            </section>
        </>
    )
}



export default Projects