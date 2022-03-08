import React from 'react';
import './featuredCollections.css';
import Carousel from '../../components/carousel/Carousel';
//import collection1 from '../../components/collectionsFeatured/collection1';
import landing_array from '../../assets/landing_array'


const FeaturedCollections = () => {
    console.log("Collections Start");
    console.log(landing_array.collection1);
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
            {/* featured elements 
            <Carousel images={landing_array.collection1}/>
            */}
            <Carousel images={landing_array.collection1}/>
            
        </div>
    );
};

export default FeaturedCollections;