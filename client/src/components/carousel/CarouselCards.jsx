import CollectionsFeatured from '../../components/collectionsFeatured/CollectionsFeatured';
import CreatorsFeatured from '../creatorsFeatured/creatorsFeatured';
import RafflesFeatured from '../rafflesFeatured/rafflesFeatured';
import Blog from '../../components/blog/Blog';
import "./carousel.css";

export default function CarouselCards({ cards, cardtype }) {

    if (cardtype == 'collection') {
        return (
            <div className='Card'>
                <CollectionsFeatured cards={cards}/> 
            </div>
        );
    }
    else if (cardtype == 'creator') {
        return (
            <div className='Card'>
                <CreatorsFeatured cards={cards}/>
            </div>
        );
    }
    else if (cardtype == 'raffle') {
        return (
            <div className='Card'>
                <RafflesFeatured cards={cards}/>
            </div>
        );
    }
    else if (cardtype == 'blog') {
        return (
            <div className='Card'>
                <Blog cards={cards}/>
            </div>
        );
    }
    else {
        return (
            <div>
                Oops, this is not a valid card
            </div>
        );
    }

 
}