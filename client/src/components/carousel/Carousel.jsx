import Slider from 'react-slick';
import "./carousel.css";
import CarouselCards from './CarouselCards';


export default function Carousel({ images }) {
  
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    };
    
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div className="sliderWrapper" key={item.id}>
            <CarouselCards cards={item} cardtype={item.type}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
