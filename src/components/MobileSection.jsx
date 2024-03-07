import React from 'react'
import mobile from '../images/mobile.png';
import google from '../images/google.png'
import apple from '../images/apple.png';
import '../styles/MobileSection.css';
const MobileSection = () => {
  return (
    <div className='mobile-background mobile py-0 px-5'>
            <div className='p-5'>
                <h2 style={{fontWeight:"700"}}>Download The Food On Track App!</h2>
                <h6>For order status update & more</h6>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
                <div className='d-flex p-3 align-items center'>
                <img height={70} width={250} src={apple} className="m-2 tabs" alt=""></img> 
                <img height={70} width={250}src={google} className="m-2 tabs" alt=""></img> 
                
                </div>
            </div>
            <div className=' col-5'>
                <img height={400} width={500} src={mobile} alt=""></img>  
            </div>
     
    </div>
  )
}

export default MobileSection