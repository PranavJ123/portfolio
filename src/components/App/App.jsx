import React from 'react';
import './App.css';
import { HashRouter as Router , Route } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App = ()=>{
    return(
        <div>
        <Router>
            <div>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <GoHome />
            </div>
        </Router>
        </div>
    );
}

export default App;