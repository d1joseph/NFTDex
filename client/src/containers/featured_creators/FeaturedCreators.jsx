import React from 'react';
import './featuredCreators.css';
import Carousel2 from '../../components/carousel/Carousel2';
import creators1 from '../../components/creatorsFeatured/creators1';
import CreatorsFeatured from '../../components/creatorsFeatured/creatorsFeatured';



const FeaturedCreators = () => {

    return (
        <div className='colorBlue__featured-creators section__padding'>
            {/* heading */}
            <div className='colorBlue__featured-creators-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Featured Creators</h1>    
                </div>
                <a className='view-all' href="">View all creators</a>
            </div>
            <span className='divider'></span>
            
            {/* featured elements in carousel 
            <Carousel2 images={creators1} type="creators_f"/>
            <CreatorsFeatured cards={creators1[0]}/>
            */}
            
            <Carousel2 images={creators1} type="creators_f"/>
            

        </div>
    );
};

export default FeaturedCreators;