import React from "react";
import aboutVector from './../../assets/about_vector.png';
import Header from "../Header/Header";
import './About.css';


const About = () => {
    return (
        <div className="section-container">
            <Header heading="About Me!" details="Backend Engineer | Guitarist | Tech/Start-Up Enthusiast | Avid Book Reader "/>
        

            {/* Vector Frame */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about"/>
            </div>
        </div>
    );
};

export default About;