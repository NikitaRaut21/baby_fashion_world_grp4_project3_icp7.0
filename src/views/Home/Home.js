
import "./Home.css"
import Header from "../../components/Header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from "../../CarouselPage";

import umbrella from "./umbrella.jfif"
import shoes  from "./shoes.jfif"
import raincoat from "./raincoat.jfif"
import toys from "./toys.jfif"
import boys from "./boy-cloths.jfif"
import girls from "./girls-cloths.jfif"

const Home = () => {
    return(<>
    <Header/>
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
       </video>
    </div>

    <div>          
        <img src="https://bornbabies.com/cdn/shop/files/01_organically_sourced.png?v=1715239298&width=512" className="srvice-img"/>              
        <img src="https://bornbabies.com/cdn/shop/files/04_Eco-Friendly.png?v=1715239494&width=512" className="srvice-img"/>
        <img src="https://bornbabies.com/cdn/shop/files/05_Trusted_by_Parents.png?v=1715239214&width=512" className="srvice-img"/>
        <img src="https://bornbabies.com/cdn/shop/files/truck.svg?v=1703846885&width=52" className="srvice-img"/>
        <img src="https://bornbabies.com/cdn/shop/files/03_secure-payment.png?v=1715239523&width=512" className="srvice-img"/>
        <img src="https://bornbabies.com/cdn/shop/files/mdi_organic-outline.svg?v=1703846868&width=58" className="srvice-img"/>           
    </div>
    
    </>)
 }
  export default Home