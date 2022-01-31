import React from "react";
import './Blog.css';

const BlogCard = ({
    blogName,
    blogDescription,
    imageUrl,
    blogUrl
}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={blogUrl} className="project-external-link">
                    <img src={imageUrl} alt="project" className="project-image"/>
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">
                    {blogName}
                </h2>
                <p className="project-details">
                    {blogDescription}
                </p>
            </div>
        </div>
    )
}

export default BlogCard;