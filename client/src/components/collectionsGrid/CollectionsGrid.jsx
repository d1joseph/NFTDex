import React from 'react';
import './collectionsGrid.css';

export default function CollectionsGrid({ cards }) {
    
    return (
        <div className='colorBlue__collections_grid' key={cards.id} >
            {/* Creator Profile Banner + Image*/}
            <img className = 'colorBlue__collections_grid-cardImg' src={ cards.col_src } alt={ cards.auth_banner_alt} />
            <img className='colorBlue__creators_grid-icon'src={ cards.col_logo } alt={ cards.auth_logo_alt} />
          
            
            {/* Creator Name + Verified */}
            <div className='row creator'>    
                <div className='colorBlue__creators_grid-name' >
                        <p>{cards.col_name}</p>
                        <img className = 'colorBlue__creators_grid-verified' src={ cards.col_verified } alt="" />
                </div >
            </div>
            
            {/* Creator Desc/Bio */}
            <div className='row desc'>
                <div className='colorBlue__creators_grid-description'>
                    {cards.col_desc}
                </div>
            </div>
        </div>
    );
};