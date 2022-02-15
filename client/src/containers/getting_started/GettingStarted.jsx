import React from 'react';
import './gettingStarted.css';

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
        </div>
    );
};

export default GettingStarted;