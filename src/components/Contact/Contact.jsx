import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';
import './Contact.css';

const Contact = ()=>{
    return(
        <div className="section-container">
            <Header heading="Get in touch." details="Interested to collaborate? Feel free to drop me an email." />

            <div className="contact-form-container">
                <form  className="contact-form"   action="https://formspree.io/f/xoqykyzn" method="POST">
                    <input type="email" name="_replyto" placeholder="Your Email Id" className="input-box email-input" />
                    <textarea name="message" type="text" placeholder="Your Message" className="input-box body-input"></textarea>
                    <button type="submit" className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>

            <div className="social-icons-container">
                <a href="https://github.com/PranavJ123" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/pranav-jain-b706b01b1/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                {/* <a href="https://www.instagram.com/pranav.jain1912/" className="social-icon">
                    <img src={instagram} alt="social" />
                </a> */}
                <a href="https://pranavj123.github.io/portfolio" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>
            <FooterLink phrase="Read more " link="about me." toAddress="/about" />
            <div className="vector-frame">
                <img src={contactVector} alt="contact" className="about-vector" />
            </div>
        </div>
    );
}

export default Contact;