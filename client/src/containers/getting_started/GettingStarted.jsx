import React from 'react';
import './gettingStarted.css';
import Blog from '../../components/blog/Blog';
import tips from '../../assets/getting_started/10 Tips.png';
import safe from '../../assets/getting_started/Keeping Safe.png';
import beginners from '../../assets/getting_started/Beginners Guide.png';


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
            <div className='colorBlue__getting-started blogs'>
                <Blog src={safe} title={'Keeping yourself safe when buying NFTs on ColorBlue'} />
                <Blog src={tips} title={'10 tips for avoiding scams and staying safe on the decentralized web'} />
                <Blog src={beginners} title={"The Beginners's guide to creating & selling digital art NFTs"} />
            </div>

            {/* view all btn */}
            <div className='wrapper'>
                <button className='btn-view-all'>View All</button>
            </div>
        </div>
    );
};

export default GettingStarted;