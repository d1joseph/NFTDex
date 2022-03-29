import React from 'react';
import './gettingStarted.css';
import Carousel from '../../components/carousel/Carousel';
import landing_array from '../../assets/landing_array'


const GettingStarted = () => {
    
    return (
        <div className='colorBlue__getting-started '>
            {/* heading */}
            <div className='colorBlue__getting-started-heading section__header_padding'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Getting Started</h1>    
                </div>
                <a className='view-all' href="">View All Articles</a>
            </div>

            <span className='divider'></span>

            {/* featured elements */}
            
            <div className='colorBlue__getting-started-body section__body_padding'>
            <Carousel images={landing_array.articles} />
            </div>
            
            

            {/* view all btn 
                <div className='wrapper'>
                    <button className='btn-view-all'>View All</button>
                </div>
            */}

        </div>
    );
};

export default GettingStarted;