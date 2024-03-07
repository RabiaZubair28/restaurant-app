import React from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Reviews.css';
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Reviews = () => {
  return (
    <div className="my-5">
        <h2 className='text-center' style={{fontWeight:"700"}}>What our customers say!</h2>
    <div className='reviews m-5 '>
            <div className=' d-flex align-items-center mx-auto col-6'>
                <div className="text-center m-3">
                    <span className="icon1"><i class="ri-folder-video-fill"></i></span>
                    <h3>1Cr+ Installs</h3>
                    <span>On Google Play</span>
                </div>
                <div className="text-center m-3">
                    <span className="icon2"><i class="ri-bowl-fill"></i></span>
                    <h3>3Cr+ Meals</h3>
                    <span>Ordered</span>
                </div>
                <div className="text-center m-3">
                    <span className="icon3"><i class="ri-survey-fill"></i></span>
                    <h3>2K+ Restaurants</h3>
                    <span>To Order From</span>
                </div>
            </div>
            <div className=' col-5'>
            <Slider {...settings}>
                <div>
                    <h2 className="customer-name">
                        Rabia Zubair
                    </h2>
                    <h5 className="customer-stars">
                        Reviews 5 <span class='ri-star-line'></span>
                    </h5>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div>
                    <h4>
                        Anisha Khatri
                    </h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div>
                    <h4>
                        Sanjna Talib
                    </h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </Slider>

            </div>
     </div>
    </div>
  )
}

export default Reviews