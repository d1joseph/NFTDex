import React from 'react';
import './blog.css';

const Blog = (props) => {
    
    return (
        <div className='colorBlue__getting-started-blog'>
            <a href="#">
                <img src={props.src} alt="" />
                <h1>{props.title}</h1>            
            </a>
        </div>
    )
};

export default Blog