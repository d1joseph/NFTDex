import React, { useState } from 'react';
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
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
    
    return timeLeft;
};

// progress bar



const raffleListing = () => {
    /*
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
    */
    
    return (
        <div className='colorBlue__raffle-listing' >
            
            { /* nft image file */ }
            <div className='nft-image'>
                <img src={ nft } alt="" />
            </div>

            <div className='row'>
                { /* collection data */ }
                <div className='collection'>
                    <img src={ nftCollectionIcon } alt="" />
                    <h5>Bored Ape Yacht Club</h5>
                </div>

                { /* nftId */ }
                <div className='nftId'>
                    <p>#0369</p>
                </div>
            </div>

            <div className='row'>
                { /* raffle end timer */ }
                <div className='time-left'>
                    <p className='timer-label'>Ending in</p>
                    {/*{timerComponents.length ? timerComponents : <span>Time's up!</span>}*/}
                    <div className='timer'><strong>22h 58m 26s</strong></div>
                </div>
                
                { /* reserve prog bar */ }
                <div className='reserve'>
                    <p>Reserve</p>
                </div>
            </div>

            { /* ticket price in eth */ }
            <div className='ticket-price'>
                <img src={ ethereum } alt="Ethereum" />
                <p>Ticket Price</p>
                <div className='eth-amount'> <strong>0.01</strong></div>
                <span>($1,000,000,000.00 AUD)</span>
            </div>
            
            { /* nft-owner */ }
            <div className='nft-owner'>
                <img src={''}  />
                <p className='user'>Owned by {'TJ'}</p>
            </div>
        </div>
    );
};

export default raffleListing;