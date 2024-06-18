import React from 'react'
import "./Service.css"

import Source from "./organically_sourced.webp"
import friendly from "./eco-friendly.webp"
import trust from "./mother.webp"
import Shipping from "./shipping.svg"
import payment from "./Payment.webp"
import natural from "./Natural.svg"

function Service() {
  return (
    <div>
{/* 
       <div className='Service-header'>
         <h1>Services</h1>
       </div> */}

       <div  className='Srvice-Container'>
        <div className='img1'>
           <img src={Source} className="srvice-img"/>  
           <p className='service-text'> Originally Sourced</p>     
        </div> 

        <div  className='img1'>
          <img src={friendly} className="srvice-img"/>
          <p className='service-text'> Eco Friendly</p> 
        </div>

        <div  className='img3'>

          <img src={trust} className="srvice-img"/>
           <p className='service-text'>Trust of Mothers</p>    
        </div>

        <div  className='img1'>
          <img src={Shipping} className="srvice-img"/>
          <p className='service-text'>Easy Shipping</p> 
        </div>  

        <div  className='img1'>  
          <img src={payment} className="srvice-img"/>
          <p className='service-text'> Secure Payment</p>    
        </div> 

        <div  className='img1'> 
          <img src={natural} className="srvice-img"/>   
          <p className='service-text'> Natural Products</p>   
        </div>          
        </div>
    </div>
  )
}

export default Service