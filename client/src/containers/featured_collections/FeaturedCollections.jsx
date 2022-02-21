import React from 'react';
import './featuredCollections.css';

//NEW - Cats
import Carousel from '../../components/carousel/Carousel';
import cats from '../../components/carousel/cats';

//TODO IDENTIFY  top 10 collections based on number of raffles in each collection
//TODO GET collection variables for those 10 and put into Array
//TODO Pass the array to the carousel as type = collection

//TODO Form image array, pass to carousel

const FeaturedCollections = () => {

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

            {/*pass cats <Carousel data = {cats}/> */}
            <Carousel images={cats} />
            
        </div>
    );
};

export default FeaturedCollections;