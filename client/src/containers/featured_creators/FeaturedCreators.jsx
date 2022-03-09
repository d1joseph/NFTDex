import React from 'react';
import './featuredCreators.css';
import Carousel from '../../components/carousel/Carousel';
//import creators1 from '../../components/creatorsFeatured/creators1';
import landing_array from '../../assets/landing_array'

const FeaturedCreators = () => {
    
    return (
        <div className='colorBlue__featured-creators section__padding'>
            {/* heading */}
            <div className='colorBlue__featured-creators-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Creators</h1>    
                </div>
                <a className='view-all' href="">View All Creators</a>
            </div>
            <span className='divider'></span>
            
            {/* featured elements in carousel */}
            <Carousel images={landing_array.creators1} />
        </div>
    );
};

export default FeaturedCreators;