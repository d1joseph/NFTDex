import React from 'react';
import './CreatorsFeatured.css';

export default function CreatorsFeatured({ cards }) {
    
    
    return (
        
        <div className='colorBlue__creators-featured' >
            <div key={cards.id}>
                <img className = 'colorBlue__creatorss-featured-cardImg' src={ cards.src } alt="" />
                <div className='row collections'>
                    
                    <div className='colorBlue__creators-icon'>
                        <img src={ cards.logo } alt="" />
                    </div>
                    
                    <div className='colorBlue__creators-name' >
                        <h5>{cards.name}</h5>
                        <img className = 'colorBlue__creators-verified' src={ cards.col_verified } alt="" />
                    </div >

                    <div className='colorBlue__creators-socials'>
                        <p>{cards.socials}</p>
                    </div>

                    <div className='colorBlue__creators-description'>
                        <p>{cards.description}</p>
                    </div>

                </div>
                
                <div className='colorBlue__creators-divider'>
                    <span/>
                </div>

                <div className='colorBlue__creators-followers'>
                    <p><strong>{cards.items}</strong> Followers</p>    
                </div>
            </div>
        </div>
    );
};