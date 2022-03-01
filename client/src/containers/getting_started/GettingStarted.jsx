import React from 'react';
import './gettingStarted.css';
//import Blog from '../../components/blog/Blog';
//import tips from '../../assets/getting_started/10 Tips.png';
//import safe from '../../assets/getting_started/Keeping Safe.png';
//import beginners from '../../assets/getting_started/Beginners Guide.png';
import Carousel from '../../components/carousel/Carousel';
import landing_array from '../../assets/landing_array'


const GettingStarted = () => {

    return (
        <div className='colorBlue__getting-started section__padding'>
            {/* heading */}
            <div className='colorBlue__getting-started-heading'>
                <div className='wrapper'>
                    <div className='dot'></div>
                    <h1>Getting Started</h1>    
                </div>
                <a className='view-all' href="">View All Articles</a>
            </div>

            <span className='divider'></span>

            {/* featured elements */}
            
            <Carousel images={landing_array.articles} />
            

            {/* view all btn 
                <div className='wrapper'>
                    <button className='btn-view-all'>View All</button>
                </div>
            */}

        </div>
    );
};

export default GettingStarted;