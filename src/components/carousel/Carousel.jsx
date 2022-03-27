import Slider from 'react-slick';
import "./carousel.css";
import CarouselCards from './CarouselCards';

export default function Carousel({ images }) {
  
  var settings = {
    arrows: false,
    dots: true,
    
    infinite: true,
    rows: 1,
    
    variableWidth: true,
    centerMode: true,
    centerPadding: "60px",
    
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

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
