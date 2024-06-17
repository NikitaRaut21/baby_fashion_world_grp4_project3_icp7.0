import "./footer.css"
import { Link } from "react-router-dom"
import facebook from "./icons/facebook.png"
import instagram from "./icons/instagram.png"
import youtube from "./icons/youtube.png"

import location from "./icons/google-maps.png"
import call from "./icons/phone.png"
import message from "./icons/comments.png"
import home from "./icons/house.png"
import contact from "./icons/phn.webp"
import about from "./icons/about.png"
import blog from "./icons/blog.png"
import review from "./icons/review.png"


 export const Footer = ()=>{
    const instagram_link = "https://www.instagram.com/accounts/onetap/?next=%2F&hl=en";
    const call_link = "tel:+8552012745";
    const message_link = "mailto:rutujawable0@gmail.com"
    const facebook_link = "https://www.facebook.com/help/192946630752330";
    const youtube_link = "https://www.youtube.com/"
    return(
        <div className="footer-container">
       
<div className="footer">
    
    <div className="links">
        <h3>Quick links</h3>
      
    <Link to="/" className="links-components"><div className="img-contain"> <img src={home} className="img-content"></img>home</div></Link> 
    <Link to="/about" className="links-components"> <div className="img-contain"> <img src={blog} className="img-content"></img>blogs</div></Link>
    <Link to="/about" className="links-components"><div className="img-contain"> <img src={about} className="img-content"></img>about </div></Link>
    <Link to="/contact" className="links-components"><div className="img-contain"> <img src={contact} className="img-content"></img>contact</div></Link>
    <Link to="/home" className="links-components"><div className="img-contain"> <img src={review} className="img-content"></img>review</div></Link>
    
</div>

      <div className="links">  
    <h3>Services</h3>
    <Link to="/" className="links-components">free shipping</Link>
    <Link to="/about" className="links-components">artisinal</Link>
    <Link to="/about" className="links-components">secure payment</Link>
    <Link to="/contact" className="links-components">easy return</Link>
    
    

    </div>
    
    <div className="links">  
    <h3>Our Cateogaries</h3>
    <Link to="/" className="links-components">umbrella</Link>
    <Link to="/about" className="links-components">toys</Link>
    <Link to="/about" className="links-components">boys clothes</Link>
    <Link to="/contact" className="links-components">girls clothes</Link>
    </div>
 
    <div className="contact links">  
    <h3>Contact Us</h3>
    <div className="links-components contact-components">
   <img src={location}  className="contact-images"></img>
   <span>village Kanoli, Taluka Sangamner, Dist Ahmadnagar</span>
   </div>

   <div className="links-components contact-components">
  <Link to={call_link} className="contact-link"> <img src={call}  className="contact-images"></img>
   <span className="contact_names">+8552012745</span> </Link>
   </div>

   <div className=" contact-components">
   <Link to={message_link} className="contact-link"> <img src={message}  className="contact-images"></img> 
   <span className="contact_names">rutujawable0@gmail.com</span></Link>
   </div>


    </div>

    <div className="links">  
    <img className="image"  src="https://t3.ftcdn.net/jpg/00/88/06/40/240_F_88064085_neMMjYjtsW8p7F3B1fN5jUfz3W481Puf.jpg"></img>
    </div>

    </div>

    

    <div className="icons">
        <Link to={facebook_link}> <img src={facebook} className="icons-img"></img></Link>
         <Link to={instagram_link}>  <img src={instagram}  className="icons-img"></img></Link>
     <Link to={youtube_link}><img src={youtube}  className="icons-img"></img></Link>
   
          </div>
        

          </div>

    )
}

