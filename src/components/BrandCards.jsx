import React from 'react';
import dominos from '../images/dominos.jpeg';
import lunchbox from '../images/lunchbox.jpeg';
import behrouz from '../images/behrouz.jpeg';
import '../styles/Brands.css';
const BrandCards = () => {
  return (
    <div>
      <h2 className='px-5 py-4' style={{fontWeight:"700"}}>Order from the best brands</h2>
        <div className='d-flex mx-5'>
            <img className='mx-2 image' height={150}  width={150} src={dominos} alt="" />
            <img className='mx-2 image' height={150}  width={150}  src={lunchbox} alt="" />
            <img className='mx-2 image'  height={150}  width={150} src={behrouz} alt="" />
        </div>
    </div>
  )
}

export default BrandCards