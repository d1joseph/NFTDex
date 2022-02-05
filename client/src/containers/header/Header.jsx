import React, { useEffect, useState } from 'react';
import './header.css';
import RaffleListing from '../../components/raffleListing/RaffleListing';

const Header = () => {
    
    return (
        <div className='colorBlue__header section__padding' id="home">
            <div className='colorBlue__header-content'>
                <h1 className='landing'>Discover, collect, and sell extraordinary NFTs on Color Blue</h1>
                <h2>An NFT Raffle, for collectors to punt, list and explore NFTs</h2>
                
                <div className='colorBlue__header-links'>
                    <a href=""><div className='colorBlue__header-explore'><h3>Explore</h3></div></a>
                    <a href=""><div className='colorBlue__header-list'><h3>List</h3></div></a>
                </div>
                
                <div className='colorBlue__header-learn'>
                    <h4 className='learn'>Learn more about Color Blue</h4>
                </div>
            </div>

            <div className='colorBlue__header-feature'>
                <RaffleListing />
            </div>
        </div>
    )
}

export default Header