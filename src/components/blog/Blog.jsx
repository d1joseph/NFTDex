import React from 'react';
import './blog.css';

export default function Blog({ cards }) {
    
    return (
        <div className='colorBlue__getting-started-blog' key={cards.id}>
            <a href="#">
                <img src={cards.src} alt="" />
                <h1>{cards.title}</h1>            
            </a>
        </div>
    );
};
