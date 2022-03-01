import CollectionsFeatured from '../../components/collectionsFeatured/CollectionsFeatured';
import CreatorsFeatured from '../creatorsFeatured/creatorsFeatured';
import RafflesFeatured from '../rafflesFeatured/rafflesFeatured';
import Blog from '../../components/blog/Blog';

export default function CarouselCards({ cards, cardtype }) {
    
    if (cardtype == 'collection') {
        return (
            <div>
                <CollectionsFeatured cards={cards}/> 
            </div>
        );
    }
    else if (cardtype == 'creator') {
        return (
            <div>
                <CreatorsFeatured cards={cards}/>
            </div>
        );
    }
    else if (cardtype == 'raffle') {
        return (
            <div>
                <RafflesFeatured cards={cards}/>
            </div>
        );
    }
    else if (cardtype == 'blog') {
        return (
            <div>
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