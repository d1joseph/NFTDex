import React, { useEffect, useState } from 'react';
import './RafflesFeatured.css';

export default function RafflesFeatured({ cards }) {
    console.log({cards});
    

    /* from raffle listings */

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
    
    let bgcolor = '#000000';

    if (completed == 100){
        bgcolor = '#2DB67C'
    }

    const containerStyles = {
        height: 18,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 5
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    
    const labelStyles = {
        padding: 2,
        color: 'white',
        fontWeight: 'bold'
    }
    
    console.log(completed)
    return (
        
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
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
        <div className='colorBlue__raffles-featured' >
            <div key={cards.id}>
                {/*NFT Image */}
                <img className = 'colorBlue__raffless-featured-cardImg' src={ cards.nft_src } alt="" />
                    {/*Collection Icon */}
                    <div className='colorBlue__raffles-col_icon'>
                        <img src={ cards.col_logo } alt="" />
                    </div>

                    {/*Collection Name + Verified */}
                    <div className='colorBlue__raffles-col_name' >
                        <p>{cards.col_name} <img className = 'colorBlue__raffles-verified' src={ cards.col_verified } alt="" /></p>
                    </div >

                    {/*NFT Name */}
                    <div className='colorBlue__raffles-nft_name' >
                        <p>{cards.nft_name}</p>
                    </div >

                    {/*Ticket */}
                    <div className='colorBlue__raffles-ticket' >
                        Ticket
                    </div >

                    <div className='colorBlue__raffles-ticketprice' >
                        <img src={ cards.currency } alt="" />{cards.raf_price}
                    </div >

                    
                    <div className='colorBlue__rafflesFeatured_raffle'>
                        <div className='row raffle'>
                    
                            {/*Ends In */}
                            <div className='colorBlue__rafflesFeatured_time-left'>
                                <p className='colorBlue__rafflesFeatured_timer-label'>Ending in</p>
                                {/* <div className='timer'><strong>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</strong></div> */}
                                <div className='timer'><strong>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</strong></div>
                            </div>
                            {/*Reserve Prog */}
                            <div className='colorBlue__rafflesFeatured_reserve'>
                                <p className='colorBlue__rafflesFeatured_progress-bar-label'>Reserve</p>
                                <div className='colorBlue__rafflesFeatured_progress-bar'>
                                    {/* <ProgressBar bgcolor={ "#000000" } completed={50} /> */}
                                    <ProgressBar bgcolor={ "#000000" } completed={Math.floor((cards.raf_tickets_sold/cards.raf_tickets_reserve) * 100)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                
            </div>
        </div>
    );
};
