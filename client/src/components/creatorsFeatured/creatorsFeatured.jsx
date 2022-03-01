import React from 'react';
import './CreatorsFeatured.css';

export default function CreatorsFeatured({ cards }) {
    
    return (
        <div className='colorBlue__creators_featured' >
            {/* Creator Profile Banner + Image*/}
            <img className = 'colorBlue__creators_featured-cardImg' src={ cards.auth_banner_src } alt={ cards.auth_banner_alt} />
            <img className='colorBlue__creators-icon'src={ cards.auth_logo_src } alt={ cards.auth_logo_alt} />
            <br/>
            <br/>
            <br/>
            
            {/* Creator Name + Verified */}
            <div className='row creator'>    
                <div className='colorBlue__creators-name' >
                        <p>{cards.auth_name}</p>
                        <img className = 'colorBlue__creators-verified' src={ cards.auth_verified } alt="" />
                </div >
            </div>
            
            {/* Creator Social */}
            <div className='row social'>
                <div className='colorBlue__creators-socials'>
                    {cards.auth_socials}
                </div>
            </div>

            {/* Creator Desc/Bio */}
            <div className='row desc'>
                <div className='colorBlue__creators-description'>
                    {cards.auth_description}
                </div>
            </div>

            {/* Divider */}                
            <span className='colorBlue__creators-divider'> </span>
            <br/>
            
            {/* Followers */}                
            <div className='row followers'>
                <div className='colorBlue__creators-followers'>
                <strong>{cards.auth_followers}</strong> Followers
                </div>
            </div>
            
        </div>
    );
};