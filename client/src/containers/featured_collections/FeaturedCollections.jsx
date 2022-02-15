import React from 'react';
import './featuredCollections.css';

const FeaturedCollections = () => {

    return (
        <div className='colorBlue__featured-collections section__padding'>
            {/* heading */}
            <div className='colorBlue__featured-collections-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Collections</h1>    
                </div>
                <a className='view-all' href="">View all raffles</a>
            </div>
            <span className='divider'></span>

            {/* featured elements */}
        </div>
    );
};

export default FeaturedCollections;