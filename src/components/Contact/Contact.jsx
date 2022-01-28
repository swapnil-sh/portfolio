import React from "react";
import contactVector from './../../assets/contact_anime.png';
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import medium from './../../assets/in.png';
import instagram from './../../assets/me.png';
import web from './../../assets/web.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="section-container">
            <Header 
                heading="Get in touch!" 
                details="Interested to collaborate? Please drop me an email!"    
            />

            {/* Contact Form */}
            <div className="contact-form-container">
                <form className="contact-form">
                    <input
                        type="email"
                        placeholder="Please enter your email id"
                        name="email"
                        className="input-box email-input"
                    />
                    <textarea
                        type="text"
                        placeholder="Shoot your message!"
                        name="message"
                        className="input-box body-input"
                    >
                    </textarea>
                    <button
                        type="submit"
                        className="contact-btn"
                    >Send!</button>
                </form>
            </div>

            {/* Social Icons */}
            <div className="social-icons-container">
                <a href="https://github.com/swapnil-sh" className="social-icon">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://linkedin.com/swapnil-sh" className="social-icon">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://medium.com/swapnilsharma" className="social-icon">
                    <img src={medium} alt="medium"/>
                </a>
                <a href="https://instagram.com/swapnil-09" className="social-icon">
                    <img src={instagram} alt="insta"/>
                </a>
                <a href="https://twitter.com/SwapnilSharma18" className="social-icon">
                    <img src={web} alt="twitter"/>
                </a>
            </div>
            <FooterLink 
                phrase="Read more " 
                link="about me!" 
                toAddress="/about"
            />

            <div className="vector-frame">
                <img 
                    src={contactVector}
                    alt='contact'
                    className="about-vector"
                />
                
            </div>
        </div>
    );
};

export default Contact;
