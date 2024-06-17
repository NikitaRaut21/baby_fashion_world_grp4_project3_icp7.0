import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Blogs.css"
import img1 from "./img/blogs-img1.jfif"
import img2 from "./img/blogs-img2.jfif"
import img3 from "./img/blogs-img3.jfif"

function Blogs() {
  return (
    <div>

      <div className='Blog-Heading_text'>
        <h1>Blog Posts</h1></div>

      <div  className='Blog-Container'>      
        <div className='Blog'>
            <img src={img1} className="img"/>
              <h1  className='Blog-heading'>How Can I Get My Baby to Eat Without Phone ?</h1>
                <p className='Blog-text'>This is undoubtedly the challenge that every mother faces in the digital age: how to encourage her kid to eat without relying on a phone.
              Mealtime conflicts and diversions can make it difficult to instill healthy eating habits in your child. </p>
         </div>

        <div className='Blog'>
        <img src={img2} className="img"/>
         <h1  className='Blog-heading'>Tips On Newborn Care For The First 30 Days ?</h1>
           <p className='Blog-text'>
             The experience can be enthralling and also demanding. We agree! The initial phase is crucial since it intertwines your love and joy 
               with the challenges of caring for your infant. But worry not! First Step lists tips on newborn care for the first 30 days that help
                you create a strong bond with your precious bundle.</p>
         </div>

         <div className='Blog'>
            <img src={img3} className="img"/>
         <h1  className='Blog-heading'>How to Eatblish a Sleep Routine for Babies ?</h1>
           <p  className='Blog-text'>Getting your baby to sleep is more challenging than it sounds. They can get hyperactive whenever it’s close to bedtime or even become
              fussy and irritable.But this is probably because you don’t have a proper sleep routine in place. Read this blog to learn more about how 
              to get your baby to sleep undisturbed and for longer. </p>
         </div>
      </div>
          
    </div>
  )
}

export default Blogs;