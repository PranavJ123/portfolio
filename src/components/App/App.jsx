import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Projects from './../Projects/Projects';
import Contact from './../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <GoHome />
                </div>
            </Router>
        </div>
    );
}

export default App;
