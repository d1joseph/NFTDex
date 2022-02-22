import React from 'react';
import './featuredCollections.css';
import Carousel2 from '../../components/carousel/Carousel2';
import collection1 from '../../components/collectionsFeatured/collection1';

//TODO IDENTIFY  top 10 collections based on number of raffles in each collection
//TODO GET collection variables for those 10 and put into Array

const FeaturedCollections = () => {
    const conttype = "collections_f";
    return (
        <div className='colorBlue__featured-collections section__padding'>
            {/* heading */}
            <div className='colorBlue__featured-collections-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Collections</h1>    
                </div>
                <a className='view-all' href="">View All Collections</a>
            </div>
            <span className='divider'></span>
            {/* featured elements */}
            <Carousel2 images={collection1} type="collections_f"/>
            
        </div>
    );
};

export default FeaturedCollections;