import Slider from 'react-slick';
import "./carousel.css";
import CollectionsFeatured from '../../components/collectionsFeatured/CollectionsFeatured';

export default function Carousel2({ images , type}) {
  
  console.log({images});
  console.log(type);


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
        breakpoint: 1024,
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
    else {
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
