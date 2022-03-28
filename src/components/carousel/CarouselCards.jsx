import CollectionsFeatured from '../../components/collectionsFeatured/CollectionsFeatured';
import CollectionsGrid from '../../components/collectionsGrid/CollectionsGrid';
import CollectionsList from '../../components/collectionsList/CollectionsList';
import CreatorsFeatured from '../creatorsFeatured/creatorsFeatured';
import CreatorsList from '../creatorsList/creatorsList';
import RafflesGrid from '../rafflesGrid/RafflesGrid';
import RafflesList from '../rafflesList/RafflesList';
import Blog from '../../components/blog/Blog';
import "./carousel.css";

export default function CarouselCards({ cards, cardtype }) {
    
    if (cardtype == 'collection') {
        return (
            <CollectionsList cards={cards}/> 
        );
    }
    else if (cardtype == 'creator') {
        return (
            <CreatorsList cards={cards}/>
        );
    }
    else if (cardtype == 'raffle') {
        return (
            <RafflesList cards={cards}/>
        );
    }
    else if (cardtype == 'blog') {
        return (
            <Blog cards={cards}/>
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