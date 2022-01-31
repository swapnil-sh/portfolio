import React from "react";
import './Blog.css';
import {blogsData} from './../../assets/blogsData.js';
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import BlogCard from "./BlogCard";


const Blog = () => {
    return (
        <div className="section-container">
           <Header 
                heading="Checkout my recent Blogs!" 
                details="I prefer to write blogs in my free time."    
            />
            
            <div className="project-cards-container">
                {
                    blogsData.map(
                    ({
                        blogName,
                        blogDescription,
                        imageUrl,
                        blogUrl
                    }) => {
                        return (
                                <BlogCard 
                                    blogName={blogName} 
                                    blogDescription={blogDescription} 
                                    imageUrl={imageUrl}
                                    blogUrl={blogUrl} />
                        )})}
            </div>

            <FooterLink 
                phrase="Checkout my " 
                link="skills!" 
                toAddress="/skills"
            />
        </div>
    );
}

export default Blog;