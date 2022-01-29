import React from "react";
import {projectsData} from './../../assets/projectsData';
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Projects.css';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="section-container">
           <Header 
                heading="Checkout my Projects!" 
                details="I have always loved learning new technologies and building something out of it. Below are some my cool projects that Ive worked on!"    
            />
            
            <div className="project-cards-container">
                {
                    projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl
                    }) => {
                        return (
                                <ProjectCard 
                                    projectName={projectName} 
                                    projectDescription={projectDescription} 
                                    imageUrl={imageUrl} videoUrl={videoUrl} 
                                    projectUrl={projectUrl} />
                        )})}
            </div>

            <FooterLink 
                phrase="Checkout my " 
                link="skills!" 
                toAddress="/skills"
            />
        </div>
    );
};

export default Projects;