import React, { useEffect, useState } from 'react';
import { RiTimeLine } from 'react-icons/ri';
import './rafflesGrid.css';

export default function RafflesGrid({ cards }) {
    
    
// raffle timer
const raffleTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60)
        };
      }
    
    return timeLeft;
};

// progress bar
const ProgressBar = (props) => {
    const { completed } = props;
    
    let bgcolor = 'var(--color-blue)';
    let border = '1px solid var(--color-blue)';
    

    if (completed == 100){
        bgcolor = '#2DB67C'
        border = '1px solid #2DB67C'
    
    }

    const containerStyles = {
        height: 10,
        width: '100%',
        borderRadius: 50,
        border: border,
    }
    
    const fillerStyles = {
        height: '105%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    }
    
    return (
        
        <div style={containerStyles}>
            <div style={fillerStyles}>
            </div>
        </div>         
    );
};

const [timeLeft, setTimeLeft] = useState(raffleTimeLeft());
const timerComponents = [];

// iterative countdown
Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }
    
    // update
    timerComponents.push(
        <span>
            { timeLeft[interval] }{interval}{" "}
        </span>
    );
});

useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(raffleTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
});


// Prog bar state hooks
const [completed, setCompleted] = useState(0);

    return (
        /* Outline */
        <div className='colorBlue__raffles_grid' key={cards.id}>
            
            {/*NFT Image */}
            <img className = 'colorBlue__raffles_grid-cardImg' src={ cards.nft_src } alt="" />
            
            <div className='nuts'>
            {/*Collection Name,Veri - Timeleft*/}
            <div className='row raffles_grid-top'>
                 {/*Collection Name,Veri */}
                <div className='colorBlue__raffles_grid-collection'>  
                    <div className='colorBlue__raffles_grid-coll_name' >
                        <p>{cards.col_name}</p>
                        <img className = 'colorBlue__raffles_grid-verified' src={ cards.col_verified } alt="" />
                    </div >
                </div>
                {/*Timeleft*/}
                <div className='colorBlue__raffles_grid-time_left'>
                    <RiTimeLine size={12}/>
                    <div className='colorBlue__raffles_grid-timer'>
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    </div>
                </div>
            </div>
            {/*NFT ID - Res,Price*/}
            <div className='row raffles_grid-bottom'>
                {/*NFT ID */}
                <div className='colorBlue__raffles_grid-nft_name' >
                    <p>{cards.nft_name}</p>
                </div >
                {/*Res,Price*/}
                <div className='colorBlue__raffles_grid-resprice'>
                    <div className='colorBlue__raffles_grid_progress-bar'>
                        <ProgressBar completed={Math.floor((cards.raf_tickets_sold/cards.raf_tickets_reserve) * 100)} />
                    </div>
                    <div className='colorBlue__raffles_grid-ticketprice' >
                        <img src={ cards.currency } alt="" />{cards.raf_price}
                    </div >
                </div>
            </div> 
            </div>
        </div>
    );
};
