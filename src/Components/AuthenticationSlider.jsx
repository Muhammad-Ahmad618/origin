import { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/AutoSliderContent/slide1.webp";
import slide2 from "../assets/AutoSliderContent/slide2.webp";
import slide3 from "../assets/AutoSliderContent/slide3.webp";
import slide4 from "../assets/AutoSliderContent/slide4.webp";
import slide5 from "../assets/AutoSliderContent/slide5.webp";
import slide6 from "../assets/AutoSliderContent/slide6.webp";
import slide7 from "../assets/AutoSliderContent/slide7.webp";


export default function AuthenticationSlider() {
  const sliderRef = useRef(null); // Ref for the Slider component

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    arrows: false,
  };

  const slideImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
  ];
  
  useEffect(() => {
    if (sliderRef.current) {
      // Force re-initialization of the Slick slider
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  return (
    <div className="slider-container" style={{ width: "27rem", height: "33rem" }}>
      <Slider {...settings} ref={sliderRef} className="w-full h-full">
        {slideImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`coverimage-${index}`}
              className="w-[27rem] h-[33rem] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
