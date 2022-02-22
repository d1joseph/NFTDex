import React from 'react';
import './collectionsFeatured.css';

export default function CollectionsFeatured({ cards }) {
    
    console.log({cards});
    return (
        
        <div className='colorBlue__collections-featured' >
            <div key={cards.id}>
                <img className = 'cardImg' src={ cards.src } alt="" />
                <div className='row collections'>
                    
                    <div className='collection-icon'>
                        <img src={ cards.logo } alt="" />
                    </div>
                    
                    <div className='collection-name' >
                        <h5>{cards.name}</h5>
                        <img className = 'collection-verified' src={ cards.col_verified } alt="" />
                    </div >

                </div>
            </div>

            <div className='row collection-owner'>
                <p className='user'>Created by <strong>{cards.author}</strong></p>
                <img className = "collection-owner-verified" src={cards.auth_verified} alt=""/>
                <p><strong>{cards.items}k</strong> Items</p>
                
            </div>
        </div>
        
    );
};

