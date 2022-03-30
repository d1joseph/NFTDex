import React from 'react';
import './collectionsList.css';

export default function CollectionsList({ cards }) {
    
    return (
        <div className='colorBlue__collections_list' key={cards.id} >
            <div className='row collections_list'>    
                {/* Left - Image, name, items*/}
                <div className='colorBlue__collections_list-left'>
                {/* Collection Image*/}
                <img className='colorBlue__collections_list-icon'src={ cards.col_logo } alt={ cards.auth_logo_alt} />
                    <div className='col collections_list_details'>
                        <div className='colorBlue__collections_list-name_and_item'>
                            {/* Collection Name + Verification*/}
                            <div className='colorBlue__collections_list-name' >
                                <p>{cards.col_name}</p>
                                <img className = 'colorBlue__collections_list-verified' src={ cards.col_verified } alt="" />
                            </div >
                            {cards.col_items.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Items
                        </div>
                    </div>
                </div>
                {/* Right - From, amount*/}
                <div className='colorBlue__collections_list-right'>
                    <div className='col collections_list_from'>
                        <div className='colorBlue__collections_list-tickets'>
                            {/* From*/}
                            <div className='colorBlue__collections_list-resprice'>
                                    From
                            </div>
                            {/* From Amount*/}
                            <div className='colorBlue__collections_list-ticketprice' >
                                <img src={ cards.currency } alt="" />{cards.col_from}
                            </div >
                        </div>
                    </div>
                </div>    

            </div>
        </div>
    );
};