import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import {Link} from 'react-router-dom';
import './About.css';

const About = ()=>{
    return(
        <div className="section-container">
            <Header heading="About Me." details="Front-End Developer | Competitive Programmer | I am a young , dynamic B.Tech student with excellent problem-solving skill and ability to perform well in a team. Passionate towards learning new skills and gaining new skillsets and working on them." />

            <div className="about-main">
                <div className="about-main-left">
                    <h3 className="about-sub-head">Education</h3>
                    <p className="about-details">B.Tech, Computer Science and Engineering <br />Teerthankar Mahaveer University</p>


                    <h3 className="about-sub-head">Experience</h3>
                    <ul>
                        <li><p className="about-details">Laravel trainee at Prerogative Group of Institute. Check out{' '} <a href="https://drive.google.com/file/d/1r6jtMdjab4DAZRqsZCO6VqANrA0QnsoP/view?usp=sharing" target="_blank" rel="noreferrer" className="about-link-element">my certificate.</a></p></li>
                        <li><p className="about-details">I have also experience in building web apps using React and FireBase. Look into {' '} <Link to="/projects" className="about-link-element" >my work.</Link></p></li>
                    
                    </ul>


                    <h3 className="about-sub-head">Certifications</h3>
                    <ul>
                       <li><p className="about-details">Completed 98.5 hours ultimate course of front-end development from Udemy. Check out{' '} <a href="https://www.udemy.com/certificate/UC-dad5fb88-a907-4f00-ae90-4902d183d263/" target="_blank" rel="noreferrer" className="about-link-element">my certificate.</a></p></li>
                       <li><p className="about-details">I have completed NPTEL course of DBMS and achieved silver badge along with topper badge. Check out{' '} <a href="https://drive.google.com/file/d/1r8Uq-GlMLGnJ-zX4MV3wUpVVQprDimls/view?usp=sharing" target="_blank" rel="noreferrer" className="about-link-element">my certificate.</a></p></li>
                       <li><p className="about-details">I have also successfully completed the Cloud Computing course from IBM Skills Academy Portal. Check out{' '} <a href="https://drive.google.com/file/d/1-5BQ-mbYlIEyJzb-ZiSFeDR0NFOHv8A0/view?usp=sharing" target="_blank" rel="noreferrer" className="about-link-element">my certificate.</a></p></li>
                    
                   
                    </ul>
                    
                </div>

                <div className="about-main-right">
                    <img src={aboutAnime} alt="about-animation" className="about-anime" />
                </div>
            </div>

            <FooterLink phrase="Check out my " link="projects!" toAddress="/projects" />
            <div className="vector-frame">
                <img src={aboutVector} alt="about" className="about-vector" />
            </div>
        </div>
    );
}

export default About;
