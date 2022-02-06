import React, { useEffect, useState } from 'react';
import './raffleListing.css';
import nft from '../../assets/Featured NFT Image.png';
import nftCollectionIcon from '../../assets/Featured NFT Collection.png';
import ethereum from '../../assets/Ethereum.png';
import nftOwner from '../../assets/Featured NFT Owner Avatar.png';

// dummy listing data
let listings = {
    nftCollection: "Bored Ape Yacht Club",
    nftOwnerName: "TJ",
    reserveGoal: 1000000,
}

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
    const { bgcolor, completed } = props;
    
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
    
    
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>         
    );
};


const raffleListing = () => {
    
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
                { timeLeft[interval] } {interval}{" "}
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

    /* 
    Testing progression animation and behaviour
    
    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), []);
    })
    */

    return (
        <div className='colorBlue__raffle-listing' >
            
            { /* nft image file */ }
            <div className='nft-image'>
                <img src={ nft } alt="" />
            </div>

            <div className='row collections'>
                { /* collection icon */ }
                <div className='collection-icon'>
                    <img src={ nftCollectionIcon } alt="" />
                </div>
                
                { /* collection name */ }
                <div className='collection-name' >
                    <h5>Bored Ape Yacht Club</h5>
                </div >

                { /* nftId */ }
                <div className='nftId'>
                    <p>#0369</p>
                </div>
            </div>

            <div className='row raffle'>
                { /* raffle end timer */ }
                <div className='time-left'>
                    <p className='timer-label'>Ending in</p>
                    <div className='timer'><strong>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</strong></div>
                </div>
                
                { /* reserve prog bar */ }
                <div className='reserve'>
                    <p className='progress-bar-label'>Reserve</p>
                    <div className='progress-bar'>
                        <ProgressBar bgcolor={ "#000000" } completed={50} />
                    </div>
                </div>
            </div>

            { /* ticket price in eth */ }
            <div className='col ticket-price'>
                <p>Ticket Price</p>
                <div className='row ticket-price'>
                    <img src={ ethereum } alt="Ethereum" id='' />
                    <div className='eth-amount'> <strong>0.01</strong></div>
                    <span>($1,000,000,000.00 AUD)</span>
                </div>
            </div>
            
            { /* nft-owner */ }
            <div className='row nft-owner'>
                <button>Join Raffle</button>
                <img src={ nftOwner }  />
                <p className='user'>Listed by <strong>{'TJ'}</strong></p>
            </div>
        </div>
    );
};

export default raffleListing;