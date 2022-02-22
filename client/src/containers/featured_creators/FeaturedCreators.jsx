import React from 'react';
import './featuredCreators.css';
import Carousel2 from '../../components/carousel/Carousel2';
import cats from '../../components/carousel/cats';



const FeaturedCreators = () => {

    return (
        <div className='colorBlue__featured-creators section__padding'>
            {/* heading */}
            <div className='colorBlue__featured-creators-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Creators</h1>    
                </div>
                <a className='view-all' href="">View all raffles</a>
            </div>
            <span className='divider'></span>
            
            {/* featured elements in carousel */}
            <Carousel2 images={cats} />

        </div>
    );
};

export default FeaturedCreators;