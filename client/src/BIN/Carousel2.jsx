import Slider from 'react-slick';
import "./carousel.css";
import CollectionsFeatured from '../components/collectionsFeatured/CollectionsFeatured';
import CreatorsFeatured from '../components/creatorsFeatured/creatorsFeatured';
import RafflesFeatured from '../components/rafflesFeatured/rafflesFeatured';

export default function Carousel2({ images , type}) {
  

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
          
          }
      }
    ]
    };

    const retType = type;
    console.log(retType);
  
    if (retType == 'collections_f') {
      return (
        <div>
          <Slider {...settings}>
            {images.map((item) => (
              <div className="sliderWrapper" key={item.id}>
                <CollectionsFeatured cards={item}/>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
    else if (retType == 'creators_f') {
      return (
        <div>
          <Slider {...settings}>
            {images.map((item) => (
              <div className="sliderWrapper" key={item.id}>
                <CreatorsFeatured cards={item}/>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
    else if (retType == 'raffles_f') {
      return (
        <div>
          <Slider {...settings}>
            {images.map((item) => (
              <div className="sliderWrapper" key={item.id}>
                <RafflesFeatured cards={item}/>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
    else{
      return (
        <div>
          <Slider {...settings}>
          {images.map((item) => (
            <div className="sliderWrapper" key={item.id}>
                <img className="sliderImg" src={item.src}  alt={item.alt} />
                <p>{item.name}</p>
            </div>
          ))}
          </Slider>
        </div>
      );
    }
}
