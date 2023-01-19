import './App.css'
import React, { Fragment } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ReactGA from 'react-ga4';



ReactGA.initialize('G-9J92035WTP');
// ReactGA.pageview(window.location.pathname);

const App = () => {
  return (   
    <>
    <Fragment>
      <nav>
        <Link to='/'/>
        <Link to='/aboutme'/>
        <Link to='/projects'/>
      </nav>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/aboutme' element={ <AboutMe/> }/>
        <Route path='/projects' element={ <Projects/> }/>
      </Routes>
      <Footer/>
    </Fragment>
    </>
  )
}

export default App
