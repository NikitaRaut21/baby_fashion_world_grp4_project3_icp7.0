import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Blogs.css"

import img1 from "./img/blogs-img1.jfif"
import img2 from "./img/blogs-img2.jfif"
import img3 from "./img/blogs-img3.jfif"
import img4 from "./img/blogs-img4.jfif"
import img5 from "./img/blogs-img5.jfif"
import img6 from "./img/blogs-img6.jpg"

function Blogs() {
  return (
    <div>
    
      <div className='Blog-Heading_text'>
        <h1>Blog Posts</h1></div>

      <div  className='Blog-Container'>      
        <div className='Blog'>
            <img src={img1} className="img"/>
              <h1  className='Blog-heading'>How Can I Get My Baby to Eat Without Phone ?</h1>
                <p className='Blog-text'>This is undoubtedly the challenge that every mother faces in the digital age
              Mealtime conflicts  can make it difficult to instill healthy eating habits in your child. </p>
         </div>

        <div className='Blog'>
        <img src={img2} className="img"/>
         <h1  className='Blog-heading'>Tips On Newborn Care For The First 30 Days ?</h1>
           <p className='Blog-text'>
             The experience can be enthralling and also demanding. We agree! The initial phase is crucial since it intertwines your love  
               with the challenges of caring for your infant. </p>
         </div>

         <div className='Blog'>
            <img src={img3} className="img"/>
         <h1  className='Blog-heading'>How to Eatblish a Sleep Routine for Babies ?</h1>
           <p  className='Blog-text'>Getting your baby to sleep is more challenging than it sounds. 
           .But this is probably because you don’t have a proper sleep routine in place. </p>
         </div>
         <div className='Blog'>
            <img src={img4} className="img"/>
              <h1  className='Blog-heading'>Reason Why Should Prefer Cotton Cloths For Babies ?</h1>
                <p className='Blog-text'> If you are a new parent or a parent-to-be, you must have been told by 
                the elders of the family to use cotton fabric on your babies because your baby in the comfort.</p>
         </div>

         
         <div className='Blog'>
            <img src={img5} className="img"/>
         <h1  className='Blog-heading'>How to Eatblish a Daily Routine for Babies ?</h1>
           <p  className='Blog-text'>But this is probably because you don’t have a proper sleep routine in place. Read this blog to learn more about how 
              to get your baby to sleep undisturbed for longer. </p>
         </div>

        <div className='Blog'>
        <img src={img6} className="img"/>
         <h1  className='Blog-heading'>How to Choose the Best Baby Wipes for NewBorn ?</h1>
           <p className='Blog-text'>
           Read through the blog to discover how to choose the best baby wipes which ensure your little one enjoys 
           the gentlest,safest, and most soothing diaper changes.</p>
         </div>

      </div>
          
    </div>
  )
}

export default Blogs;