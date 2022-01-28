import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Contact.css';

const Contact = () => {
    return (
        <div className="section-container">
            <Header 
                heading="Get in touch!" 
                details="I love talking about Startups/Tech/Sports/WebSeries/LIFE and I'm always up for a cup of coffee or playing TT. Interested to collaborate? Please drop me an email!"    
            />

            <FooterLink 
                phrase="Get in " 
                link="touch" 
                toAddress="/contact"
            />
        </div>
    );
};

export default Contact;
