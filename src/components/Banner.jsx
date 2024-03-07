import React from 'react'
import '../styles/Banner.css';
const Banner = () => {
  return (


     
<div className='banner-card d-block text-center'>
      
<div className='heading' style={{fontWeight:"700"}}>
        Get restaurant food delivered right at your seat!
      </div>
    <div className='d-flex mx-auto m-2 searchbar'>
      <span className='icon'>
        <i className='ri-search-line'></i>
      </span>
      <span>
        <input className="search" type="text" placeholder="Search train or station to explore"></input>
      </span>
    </div>
 
    <div className='d-flex mx-auto m-2 searchbar'>
      <span className='icon'>
        <i className='ri-train-line'></i>
      </span>
      <span>
        <input className="search" type="text" placeholder="Enter PNR to order"></input>
      </span>
      <span className='submit-button'>
        SUBMIT
      </span>
    </div>
    </div>
  )
}

export default Banner