import React from 'react';
import './trendingRaffles.css';
import Carousel from '../../components/carousel/Carousel';
//import raffles1 from '../../components/rafflesFeatured/raffles1';
import landing_array from '../../assets/landing_array'

const TrendingRaffles = () => {
    
    return (
        <div className='colorBlue__trending-raffles section__padding' >
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
            Single Card - <RafflesFeatured cards={raffles1[0]}/>
            Multiple Cards - <Carousel images={landing_array.raffle1}/>
            Mixed Cards - <Carousel images={landing_array.mixedarray}/>
            */}
            <Carousel images={landing_array.raffle1}/>
        </div>
    );
};

export default TrendingRaffles;