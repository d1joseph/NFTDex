import React from 'react';
import './collectionsFeatured.css';

export default function CollectionsFeatured({cards}) {
    
    
    return (
        <div className='colorBlue__collections_featured' key={cards.id}>
            {/* Image */}
            <img className = 'colorBlue__collections_featured-cardImg' src={ cards.col_src } alt="" />
            
            {/* Collection Name */}
            <div className='row collection'>
                <img className='colorBlue__collections_featured-collection_icon' src={ cards.col_logo } alt="" />
                <div className='colorBlue__collections_featured-collection_name' >
                    <p>{cards.col_name}</p>
                    <img className = 'colorBlue__collections_featured-collection_verified' src={ cards.col_verified } alt="" />
                </div >
            </div>            

            {/* Collection Owner */}
            <div className='row collection-owner'>
                <div className= 'column collection-owner'>
                    <p>Created by <strong>{cards.auth_name}</strong></p>
                    <img className = "colorBlue__collections_featured-collection_owner_verified" src={cards.auth_verified} alt=""/>
                </div>
                <p><strong>{cards.col_items}K</strong> Items</p>
            </div>

        </div>
    );
};

