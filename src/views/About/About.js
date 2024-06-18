import "./About.css"



import firstImg from "./first-img.jpg"
import secondImg from "./second-img.png"
import Team from "./../../components/About/Team/Team";
import Card from "./../../components/About/InfoCards/Cards/Card"
import {theme} from "./../../configData";





const About = () => {
 
    return (
<>

      <div className="about-page"style={{backgroundColor:theme.backColor}}>
        <h1>About Us</h1>
        
        
        <div className="first-main-img-container">
      <img src={firstImg }className="first-main-img"/>
     
       
        <div className="text-container">
         <h1>Our story</h1>
         <h3>One of the keys to reaching your goals is to eliminate any escape routes. It is tempting to retreat to safety and comfort when challenges and difficulties arise.
           To avoid turning around and abandoning your goals, you must make going forward more compelling then going back
           We seek a world of hope, tolerance and social justice, where poverty has been overcome and all people live with dignity and security.</h3>
        </div>
        </div>

  
       
<Card/>

        <div className="second-main-img-container">
        
        <div className="second-text-container">
         <h1>About More Info.....</h1>
         <h3>
         <ul>
          <li>Available Kids Auto Umbrella</li>
          <li>Envelope neck which stretches for easy dressing - pull up over baby's head or down past their feet</li>
          <li>Comfort, mobility and ease of access are major aspects of modern baby clothes. </li>
          <li>A layette is a collection of clothing and accessories for a newborn child. </li>
          <li>A good rule of thumb is to give your baby 1 extra layer of clothing than what you're wearing.</li>
          <li>In addition to self-expression and comfort, the colors and patterns of clothing can also play a role in boosting confidence</li>
          <li>You'll likely find that most of the time, you opt to dress your newborn in easy basics.</li>
         
         
         </ul>

         </h3>
        </div>
        
        <img src={secondImg}className="second-main-img"/>
        </div>

        
       <div className="team-container">  
      <Team />
      </div>

      </div>

      
   
      </>
    );
  };
  
  export default About;