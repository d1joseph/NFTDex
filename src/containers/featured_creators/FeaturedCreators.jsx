import React from 'react';
import './featuredCreators.css';
import Carousel from '../../components/carousel/Carousel';
//import creators1 from '../../components/creatorsFeatured/creators1';
import landing_array from '../../assets/landing_array'

const FeaturedCreators = () => {
    
    return (
        <div className='colorBlue__featured-creators'>
            {/* heading */}
            <div className='colorBlue__featured-creators-heading section__header_padding'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Creators</h1>    
                </div>
                <a className='view-all' href="">View All Creators</a>
            </div>
            <span className='divider'></span>
            
            {/* featured elements in carousel */}
            <div className='colorBlue__featured-creators-body section__body_padding'>
            <Carousel images={landing_array.creators1} />
            </div>
            
        </div>
    );
};

export default FeaturedCreators;