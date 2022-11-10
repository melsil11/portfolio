import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link exact to='/'/>
        <Link to='/aboutme'/>
        <Link to='/projects'/>
      </nav>
      <main>
        <header/>
        <Route exact path = '/' component={ HomePage }/>
        <Route path = '/aboutme' component={ AboutMe }/>
        <Route path = '/projects' component={ Projects }/>
      </main>
    </div>
  );
}

export default App;
