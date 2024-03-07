import React from 'react'
import '../styles/Working.css';
const Working = () => {
  return (
 <div className='mt-5 working-bg'>
<h1 className='text-center' style={{fontWeight:"700"}}>How it Works!</h1>
        <div className='working my-0 mx-5'>

            <div className='text-center  py-4 '>
                            <img src="https://neon.ipsator.com/c/image/upload/c_scale,h_100,q_75/v1633022436/irctc/images/how-it-works-3.webp" alt="" />
            <div className='d-flex orange-band m-3 p-0'>
            <span className='orange-number'>1</span>
            <span className='px-3 py-1'>Choose an outlet</span>
           
            </div>
            <p className='text text-center ps-4'>
                Enter PNR & explore restaurant for you journey 
            </p>
            </div>
            <div className='text-center py-4 '>
            <img loading="lazy" src="https://neon.ipsator.com/c/image/upload/c_scale,h_100,q_75/v1633022435/irctc/images/how-it-works-1.webp" alt="" />
            
        
            <div className='d-flex orange-band m-3 p-0'>
            <span className='orange-number'>2</span>
            <span className='px-3 py-1'>Choose an outlet</span>
           
            </div>
            <p className='text text-center ps-4'>
                Enter PNR & explore restaurant for you journey 
            </p>
            </div>
            <div className='text-center  py-4 '>
            <img loading="lazy" src="https://neon.ipsator.com/c/image/upload/c_scale,h_100,q_75/v1633022436/irctc/images/how-it-works-2.webp" alt="" />
        
            <div className='d-flex orange-band m-3 p-0'>
            <span className='orange-number'>3</span>
            <span className='px-3 py-1'>Choose an outlet</span>
            
            </div>
            <p className='text text-center ps-4'>
                Enter PNR & explore restaurant for you journey 
            </p>
            </div>
        </div>
</div>
  )
}

export default Working
