import React, { useEffect, useState } from 'react';
import { RiTimeLine } from 'react-icons/ri';
import './rafflesList.css';

export default function RafflesList({ cards }) {
    
    
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
    let border = '1px solid var(--color-blue)'
    let width = completed + 2;

    if (completed == 100){
        bgcolor = 'var(--color-green)'
        border = '1px solid var(--color-green)'
    }

    const containerStyles = {
        height: 10,
        width: '100%',
        borderRadius: 50,
        border: border,
    }
    
    const fillerStyles = {
        position: 'relative',
        top: '-1px',
        left: '-1px',
        height: 10,
        width: `${width}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        border: border
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
        <div className='colorBlue__raffles_list' key={cards.id}>
            
            {/*NFT Image */}
            <img className = 'colorBlue__raffles_list-cardImg' src={ cards.nft_src } alt="" />

            <div className='col raffles_list-column'>

                {/*Collection Name, Ticket*/}
                {/*NFTName, TicketPrice*/}
                <div className='row raffles_list-top'>
                    {/*Collection Name, NFTName*/}
                    <div className='colorBlue__raffles_list-collection'>
                        <div className='colorBlue__raffles_list-coll_name' >
                            <p>{cards.col_name}</p>
                            <img className = 'colorBlue__raffles_list-verified' src={ cards.col_verified } alt="" />
                        </div >
                        
                        <div className='colorBlue__raffles_list-nft_name' >
                            <p>{cards.nft_name}</p>
                        </div >
                    </div>
                    {/*Ticket, TicketPrice*/}
                    <div>
                        <div className='colorBlue__raffles_list-resprice'>Ticket</div>
                        <div className='colorBlue__raffles_list-ticketprice' >
                            <img src={ cards.currency } alt="" />{cards.raf_price}
                        </div >
                    </div>
                </div>

                {/*Timeleft, Reserve*/}
                <div className='row raffles_list-bottom'>
                    <div className='colorBlue__raffles_list-time_left'>
                        <RiTimeLine size={12}/>
                        <div className='colorBlue__raffles_list-timer'>
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>
                    </div>
                    <div className='colorBlue__raffles_list_progress-bar'>
                        <ProgressBar completed={Math.floor((cards.raf_tickets_sold/cards.raf_tickets_reserve) * 100)} />
                    </div>
                
                </div>
            
            </div> 
        </div>
    );
};
