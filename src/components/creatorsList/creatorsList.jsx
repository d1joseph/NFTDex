import React from 'react';
import './creatorsList.css';

export default function CreatorsList({ cards }) {
    
    return (
        <div className='colorBlue__creators_list' key={cards.id} >
            <div className='row creators_list'>    
                {/* Left - Image, name, socials*/}
                <div className='colorBlue__creators_list-left'>
                {/* Creator Image*/}
                <img className='colorBlue__creators_list-icon'src={ cards.auth_logo_src } alt={ cards.auth_logo_src} />
                    <div className='col creators_list_details'>
                        <div className='colorBlue__creators_list-name_and_item'>
                            {/* Creator Name + Verification*/}
                            <div className='colorBlue__creators_list-name' >
                                <p>{cards.auth_name}</p>
                                <img className = 'colorBlue__creators_list-verified' src={ cards.auth_verified } alt="" />
                            </div >
                            {cards.auth_socials}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};