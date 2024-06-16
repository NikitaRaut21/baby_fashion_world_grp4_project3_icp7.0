import "./About.css"
import firstImg from "./first-img.jpg"
import secondImg from "./second-img.png"
import Team from "./../../components/About/Team/Team";
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

  
        < div className="card-container">
      <div className="about-card-container"style={{backgroundColor:theme.primaryColor}}>
        <section className="mission-section">
          <h2>Quality and Comfort</h2>
          <p>Quality and comfort are paramount when it comes to baby clothes. Babies have sensitive skin that can easily get irritated by rough fabrics or harsh chemicals. Therefore, high-quality baby clothes are typically made from soft, breathable materials like organic cotton, bamboo, and other natural fibers.</p>
        </section>
        </div>
        <div className="about-card-container"style={{backgroundColor:theme.primaryColor}}>
        <section className="mission-section">
          <h2>Safety Considerations</h2>
          <p>Safety is a critical factor in the design of baby clothes. Manufacturers avoid using small buttons, hooks, or any detachable parts that could pose a choking hazard. Instead, baby clothes often feature snap closures, zippers with protective flaps, and elastic bands that are secure yet comfortable.</p>
        </section>
        </div>
        <div className="about-card-container"style={{backgroundColor:theme.primaryColor}}>
        <section className="mission-section">
          <h2>Ease of Dressing</h2>
          <p>Dressing a squirming baby can be challenging, so baby clothes are designed to make the process as easy as possible. This includes wide neck openings, stretchy materials, and snap buttons along the inseams of pants and onesies, allowing for quick diaper changes without fully undressing the baby.</p>
        </section>
        </div>
        <div className="about-card-container"style={{backgroundColor:theme.primaryColor}}>
        <section className="mission-section">
          <h2>Stylish Designs</h2>
          <p>While practicality is key, modern baby clothes also incorporate stylish designs. Parents enjoy dressing their children in cute, fashionable outfits that reflect their tastes. From playful prints and bright colors to elegant dresses and mini suits, baby fashion has evolved to include a wide variety of styles suitable for different occasions, whether it’s a casual day at home or a special event.</p>
        </section>
        </div>
        
        </div>


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