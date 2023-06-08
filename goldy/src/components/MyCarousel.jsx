import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"

const MyCarousel = () => {
  return (
    <div className='flex justify-center'>
    <Carousel className='w-[720px] flex flex-col justify-center'>
      <div>
        <img src={slide1} alt="Slide 1" />
        {/* <p className="legend">Slide 1</p> */}
      </div>
      <div>
        <img src={slide2} alt="Slide 2" />
        {/* <p className="legend">Slide 2</p> */}
      </div>
      <div>
        <img src={slide3} alt="Slide 3" />
        {/* <p className="legend">Slide 3</p> */}
      </div>
    </Carousel>
    </div>
  );
};

export default MyCarousel;
