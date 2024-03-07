import React from 'react'
import "../styles/home.css";
import '../styles/hotels.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import kfc from "../images/kfc.jpeg"
import howdy from "../images/howdy.jpeg"
import junoon from "../images/junoon.jpeg"
import haveli from "../images/haveli.png"
import riceBowl from "../images/riceBowl.jpeg"
import rt from "../images/rt.png"
import biryani from "../images/biryani.jpeg"
import naanoori from "../images/naanoori.jpeg"


const Brands = () => {
  return (
    <div>
<section className="packages" id="packages">
    
<h2 className='text-center py-3' style={{fontWeight:"700"}}>Order From Our Best Brands!</h2>
<ul className="cards" >

  <li>
    <Link href="" class="card">
      <img src={howdy} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={howdy} alt="" />
                   
        </div>
        <h4 className='city'>Howdy</h4>
        <p style={{color:"#414040", paddingInline:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={haveli} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
               
          <img class="card__thumb" src={haveli} alt="" />
                   
        </div>
        <h4 className='city'>Haveli</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1200/-</h5>
      </div>
    </Link>
  </li> 
   
  <li>
    <Link href="" class="card">
      <img src={rt} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
  
          <img class="card__thumb" src={rt} alt="" />
                  
        </div>
        <h4 className='city'>Royal Taj</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 400/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={naanoori} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">               
          <img class="card__thumb" src={naanoori} alt="" />      
        </div>
        <h4 className='city'>Naanoori</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 500/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={junoon} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={junoon} alt="" />
                   
        </div>
        <h4 className='city'>Junoon</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={riceBowl} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={riceBowl} alt="" />
                   
        </div>
        <h4 className='city'>Rice Bowl</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={kfc} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={kfc} alt="" />
                   
        </div>
        <h4 className='city'>KFC</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={biryani} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={biryani} alt="" />
                   
        </div>
        <h4 className='city'>Biryani Bowl</h4>
        <p style={{color:"#414040", paddingInline:"25px"}} className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <br />
  <br />
   
</ul>

    </section>

  

    </div>
  )
}

export default Brands