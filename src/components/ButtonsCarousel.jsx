import React from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonsGroup from './ButtonsGroup'
import '../styles/ButtonsGroup.css';
export default function ButtonsCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="background pb-5">

<h2 className='text-center' style={{fontWeight:"700"}}>Some of the important stations we deliver at!</h2>
    <Slider {...settings} >

            <div>
                <ButtonsGroup />
            </div>
            <div>
                <ButtonsGroup />
            </div>
            <div>
                <ButtonsGroup />
            </div>
            <div>
                <ButtonsGroup />
            </div>
            <div>
                <ButtonsGroup />
            </div>
            <div>
                <ButtonsGroup />
            </div>
    
    </Slider>
    </div>
  );
}