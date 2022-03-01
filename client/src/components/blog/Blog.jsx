import React from 'react';
import './blog.css';

/*
const Blog = (cards) => {
    
    return (
        <div className='colorBlue__getting-started-blog'>
            <a href="#">
                <img src={cards.src} alt="" />
                <h1>{cards.title}</h1>            
            </a>
        </div>
    )
};

export default Blog
*/

export default function Blog({ cards }) {
    
    return (
        <div className='colorBlue__getting-started-blog'>
            <a href="#">
                <img src={cards.src} alt="" />
                <h1>{cards.title}</h1>            
            </a>
        </div>
    );
};
