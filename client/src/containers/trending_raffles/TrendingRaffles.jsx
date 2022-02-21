import React from 'react';
import './trendingRaffles.css';
import Carousel from '../../components/carousel/Carousel';
import images from '../../components/carousel/images.js';


const TrendingRaffles = () => {

    return (
        <div className='colorBlue__trending-raffles section__padding'>
            {/* heading */}
            <div className='colorBlue__trending-raffles-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Trending Raffles</h1>    
                </div>
                <a className='view-all' href="">View All Raffles</a>
            </div>
            <span className='divider'></span>
            {/* featured elements */}

            {/*pass dogs */}
            <Carousel images={images} />
            

        </div>
    );
};

export default TrendingRaffles;