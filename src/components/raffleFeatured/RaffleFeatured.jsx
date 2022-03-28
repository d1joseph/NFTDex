import React, { useEffect, useState } from 'react';
import './raffleFeatured.css';


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
    let width = completed + 2;

    if (completed == 100){
        bgcolor = 'var(--color-green)'
        border = '1px solid var(--color-green)'
    }

    const containerStyles = {
        height: 14,
        width: '100%',
        //backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: '2px 0px',
        border: border,
    }
    
    const fillerStyles = {
        position: 'relative',
        top: '-1px',
        left: '-1px',
        height: 14,
        width: `${width}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    
    /*
    const labelStyles = {
        color: 'white',
        fontWeight: 'bold'
    }
    */
    
    return (
        <div style={containerStyles} className=''>
            <div style={fillerStyles} className=''>
                {/* 
                <span style={labelStyles}>{`${completed}%`}</span>
                */}
            </div>
        </div>         
    );
};


const raffleFeatured = ({ data }) => {
    

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

    /* Testing progression animation and behaviour 
    
    
    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), []);
    })
    */
    

    return (
        <div className='colorBlue__raffle-featured' key={data.id}>
            { /* nft image file */ }
            <img className='colorBlue__raffle-featured-nftimage' src={ data.nft_src }  alt={ data.nft_alt} />
            
            { /* ---Collection Row--- */ }
            <div className='row colorBlue__raffle-featured-collection_row'>
                { /* collection icon */ }
                <div className='colorBlue__raffle-featured-collection_icon'>
                    <img src={ data.col_logo } alt="" />
                </div>
                
                { /* collection & NFT name */ }
                <div className='colorBlue__raffle-featured-collection_name' >
                    <div className='colorBlue__raffle-featured-collection_name_flex' >
                        <p>{ data.col_name } </p>
                        <img className = 'colorBlue__raffles_grid-verified' src={ data.col_verified } alt="" />
                    </div>
                    <p className='colorBlue__raffle-featured-nftId'>{ data.nft_name }</p>
                </div >
            </div>

            { /* ---Raffle Row--- */ }
            <div className='row colorBlue__raffle-featured-raffle_row'>
                { /* raffle end timer */ }
                <div className='colorBlue__raffle-featured-time_left'>
                    <p className='colorBlue__raffle-featured-timer_label'>Ending in</p>
                    <div className='colorBlue__raffle-featured-timer'><strong>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</strong></div>
                </div>
                
                { /* reserve prog bar */ }
                <div className='colorBlue__raffle-featured-reserve'>
                    <p className='colorBlue__raffle-featured-progress_bar_label'>Reserve</p>
                    <div className='colorBlue__raffle-featured-progress-bar'>
                        <ProgressBar bgcolor={ "#000000" } completed={Math.floor((data.raf_tickets_sold/data.raf_tickets_reserve) * 100)} />
                    </div>
                </div>
            </div>

            { /* ---Ticket Row--- */ }
            <div className='row colorBlue__raffle-featured-ticket_row'>
                { /* Ticket Price */ }
                <div className='colorBlue__raffle-featured_ticket'>
                    <p className='colorBlue__raffle-featured-ticket_label'>Ticket Price</p>
                    <div className='colorBlue__raffle-featured-ticket_price'>
                        <img src={ data.currency } alt="Ethereum"/>
                        <p>{ data.raf_price }</p>
                        <span>(${(data.currenccy_USD*data.raf_price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD)</span>
                    </div>
                </div>
                
                { /* Join Raffle */ }
                <div className='colorBlue__raffle-featured-Join'>
                    <button>Join Raffle</button>
                </div>
            </div>

            { /* ticket price in eth 
            <div className='col ticket-price'>
                <p>Ticket Price</p>
                <div className='row ticket-price'>
                    <img src={ ethereum } alt="Ethereum" id='' />
                    <div className='eth-amount'> <strong>0.01</strong></div>
                    <span>($1,000,000,000.00 AUD)</span>
                </div>
            </div>
            */ }
            
            { /* nft-owner 
            <div className='row nft-owner'>
                <button>Join Raffle</button>
                <img src={ nftOwner }  />
                <p className='user'>Listed by <strong>{'TJ'}</strong></p>
            </div>
            */ }
        </div>
    );
};

export default raffleFeatured;