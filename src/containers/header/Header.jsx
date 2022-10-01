import React, { useEffect, useState } from 'react';
import './header.css';
import landing_array from '../../assets/landing_array'
import RaffleFeatured from '../../components/raffleFeatured/RaffleFeatured';

const Header = () => {
    
    return (
        <div className='colorBlue__header section__header_padding' id="home">
            <div className='colorBlue__header-content'>
                <h1 className='landing'>Discover, collect, and sell extraordinary NFTs</h1>
                <h2>Color Blue the first NFT raffle and market</h2>
                
                <div className='colorBlue__header-links'>
                    <a href=""><div className='colorBlue__header-explore'><h3>Explore</h3></div></a>
                    <a href=""><div className='colorBlue__header-list'><h3>List</h3></div></a>
                </div>
                
                <div className='colorBlue__header-learn'>
                    <h4 className='learn'>Learn more about Color Blue</h4>
                </div>
            </div>

            <div className='colorBlue__header-feature'  >
                <RaffleFeatured data={landing_array.featuredRaffle[0]} />
            </div>
        </div>
    )
}

export default Header