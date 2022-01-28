import React from "react";
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Header from "../Header/Header";
import './About.css';
import FooterLink from "../FooterLink/FooterLink";


const About = () => {
    return (
        <div className="section-container">
            <Header 
                heading="About Me!" 
                details="Backend Engineer | Guitarist | Tech/Start-Up Enthusiast | Avid Book Reader "
            />

            <div className="about-main">
                <div className="about-main-left">

                     {/* Subsection 1 */}
                     <h3 className="about-sub-head">Developer</h3>
                     <p className="about-details">I'm a 2019 B.Tech passout having experience in Backend Development and let us {' '}
                        <a className="about-link-element" href="https://linkedin.com/swapnil-sh"> connect on Linkedin!</a>
                     </p>

                     {/* Subsection 2 */}
                     <h3 className="about-sub-head">Sports Enthusiast</h3>
                     <p className="about-details">I'm a 2019 B.Tech passout having experience in Backend Development and let us {' '}
                        <a className="about-link-element" href="https://linkedin.com/swapnil-sh"> connect on Linkedin!</a>
                     </p>

                     {/* Subsection 3 */}
                     <h3 className="about-sub-head">Guitarist</h3>
                     <p className="about-details">I'm a 2019 B.Tech passout having experience in Backend Development and let us {' '}
                        <a className="about-link-element" href="https://linkedin.com/swapnil-sh"> connect on Linkedin!</a>
                     </p>


                </div>
                <div className="about-main-right">
                     <img src={aboutAnime} className="about-anime" alt="about-anime"/>
                </div>
            </div>

            <FooterLink 
                phrase="Check out my " 
                link="projects!" 
                toAddress="/projects"
            />

            {/* Vector Frame */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about"/>
            </div>
        </div>
    );
};

export default About;