import React from 'react';
import './trendingRaffles.css';
import Carousel2 from '../../components/carousel/Carousel2';
import RafflesFeatured from '../../components/rafflesFeatured/rafflesFeatured';
import raffles1 from '../../components/rafflesFeatured/raffles1';

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
            {/* featured elements in carousel 
            <Carousel2 images={raffles1} type="raffles_f"/>
            <RafflesFeatured cards={raffles1[0]}/>
            */}
            <Carousel2 images={raffles1} type="raffles_f"/>

        </div>
    );
};

export default TrendingRaffles;