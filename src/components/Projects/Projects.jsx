import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Projects.css';

const Projects = () => {
    return (
        <div className="section-container">
           <Header 
                heading="Checkout my Projects!" 
                details="I have always loved learning new technologies and building something out of it. Below are some my cool projects that Ive worked on!"    
            />
            
            <FooterLink 
                phrase="Checkout my " 
                link="skills!" 
                toAddress="/skills"
            />
        </div>
    );
};

export default Projects;