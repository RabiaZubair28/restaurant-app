import React from 'react'
import '../styles/CardSection.css';
const CardSection = () => {
  return (
    <div>
        <h2 className='text-center' style={{fontWeight:"700"}}>News and Blogs about e-catering!</h2>
        <div className='card-section mx-5 px-5 py-3'>
            <div className='card px-4 py-4 m-2'>
            <h5>Indulge in the Choicest of Comfort Foods to Keep You Warm This Winter</h5>
            <h6 className='date'>26 Feb 2024</h6>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div className='d-flex'>
            Read More <span className='ri-arrow-right-line' style={{color:"orange"}}></span>
            </div>
            </div>
            <div className='card card py-4 px-4 m-2'>
            <h5>Indulge in the Choicest of Comfort Foods to Keep You Warm This Winter</h5>
            <h6 className='date'>26 Feb 2024</h6>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div className='d-flex'>
            Read More <span className='ri-arrow-right-line' style={{color:"orange"}}></span>
            </div>
            </div>
            <div className='card card py-4 px-4 m-2'>
            <h5>Indulge in the Choicest of Comfort Foods to Keep You Warm This Winter</h5>
            <h6 className='date'>26 Feb 2024</h6>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div className='d-flex'>
            Read More <span className='ri-arrow-right-line' style={{color:"orange"}}></span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardSection