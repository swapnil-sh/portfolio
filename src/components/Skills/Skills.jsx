import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import {skillList} from './../../assets/skillsData';
import skillsVector from './../../assets/skills_vector.png';
import SkillCard from "./SkillCard";
import './Skills.css';

const Skills = () => {
    return (
        <div className="section-container">
            <Header 
                heading="My Skillset." 
                details="Passionate about new technologies and exploring random stuffs. Here's the tech stack I have work with!"    
            />

            <div className="skill-card-container">
                {skillList.map(skill => (
                    <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl} />
                ))}
            </div>

            <FooterLink 
                phrase="Get in " 
                link="touch" 
                toAddress="/contact"
            />

            <div className="skills-vector-frame">
                <img 
                    src={skillsVector}
                    alt='skills'
                    className="skills-vector"
                />
                
            </div>
        </div>
    )
}

export default Skills;