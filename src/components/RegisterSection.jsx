import React from 'react'
import { Button } from 'reactstrap';
import '../styles/Register.css';
const RegisterSection = () => {
  return (
    <div className='background register m-5  py-0 px-5'>
            <div className='col-8 p-5'>
                <h2 style={{color: "white"}}>Are you a restaurant owner? Register as a vendor</h2>
                <h6 style={{color: "white"}}>We are always looking to partner with reputed and quality restaurants</h6>
                <Button style={{background:"white",color:"black",paddingInline:"20px",paddingBlock:"10px",border:"1px solid white"}}>REGISTER NOW</Button>
                
            </div>
            <div className=' col-3'>
            <img loading="lazy" src="https://neon.ipsator.com/c/image/upload/q_90/v1633022433/irctc/images/sampleVendorRegf.webp" srcset="" class="h-full w-full object-cover " alt="Vendor Register" />
            </div>
    </div>
  )
}

export default RegisterSection
