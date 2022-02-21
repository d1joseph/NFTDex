import Slider from 'react-slick'
import "./carousel.css";

export default function Carousel({ images }) {
    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
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
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };
    
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

