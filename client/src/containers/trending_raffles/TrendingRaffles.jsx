import React from 'react';
import './trendingRaffles.css';

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

        </div>
    );
};

export default TrendingRaffles;