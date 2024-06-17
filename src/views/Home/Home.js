import Navbar from  "./../../components/Header/Navbar"
import "./Home.css"

import 'bootstrap/dist/css/bootstrap.min.css';


import  CarouselPage from"./../../components/Home/CarouselPage/CarouselPage";

import Slider from "./../../components/Home/Blogs/Blogs"

import umbrella from "./umbrella.jfif"
import shoes  from "./shoes.jfif"
import raincoat from "./raincoat.jfif"
import toys from "./toys.jfif"
import boys from "./boy-cloths.jfif"
import girls from "./girls-cloths.jfif"
import Service from "../../components/Home/Service/Service";
// import { Slide}  from "react-slideshow-image";
import Blogs from "./../../components/Home/Blogs/Blogs";





const Home = () => {
    return(<>
    <Navbar/>
    <CarouselPage/>  
 
    <div className="Fashion-categories">
        
        <img src={umbrella} className="umbrealla-img"/>
     
        <img src={shoes } className="umbrealla-img"/>
       
        <img src={raincoat} className="umbrealla-img"/>
       
        <img src={toys} className="umbrealla-img"/>
       
        <img src={boys}className="umbrealla-img"/>
        
        <img src={girls} className="umbrealla-img"/>      
       
    </div>

    <div>
       <video controls  className="home-video">
         <source src="https://www.youtube.com/watch?v=JNQXAC9IVRw" type="mp4"/>   
         <p></p>     
       </video>
    </div>
  
    <Service/>
    <Blogs/>
     <div>
      <div>
        <img src=""/>
        <p></p>
      </div>
      
      <div>
        <img src=""/>
        <p></p>
      </div>
     </div>
    
    
    </>)
 }
  export default Home