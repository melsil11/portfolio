import './App.css'
import React, { Fragment } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

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
    </Fragment>
    </>
  )
}

export default App
