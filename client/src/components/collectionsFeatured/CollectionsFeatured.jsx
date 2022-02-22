import React from 'react';
import './collectionsFeatured.css';

export default function CollectionsFeatured({ cards }) {
    
    console.log({cards});
    return (
        
        <div className='colorBlue__collections-featured' >
            <div key={cards.id}>
                <img src={ cards.src } alt="" />
                <div className='row collections'>
                    
                    <div className='collection-icon'>
                        <img src={ cards.logo } alt="" />
                    </div>
                    
                    
                    <div className='collection-name' >
                        <h5>{cards.name}</h5>
                    </div >
                </div>
            </div>

            <div className='row nft-owner'>
                <p className='user'>Created by <strong>{cards.author}</strong></p>
                <p><strong>{cards.items}k</strong> Items</p>
            </div>
        </div>
        
    );
};

