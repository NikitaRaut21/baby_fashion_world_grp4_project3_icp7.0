import React from 'react';
import "./Card.css"
import CardData from './../CardData/CardData';
import firstImg from "../firstImg.png"
import secondImg from "../secondImg.png"
import thirdImg from "../thirdImg.png"
import fourthImg from "../fourtImg.png"



// Sample Data
const Cards = [
  { id: 1,
    heading:'Quality and Comfort',
    icon: firstImg,
    content : 'Quality and comfort are paramount when it comes to baby clothes. Babies have sensitive skin that can easily get irritated by rough fabrics or harsh chemicals.',
  },

  { id: 2, 
    heading: 'Safety Considerations',
    icon: secondImg,
    content: 'Safety is a critical factor in the design of baby clothes. Manufacturers avoid using small buttons, hooks, or any detachable parts that could pose a choking hazard.', 
  },

  { id: 3, 
    heading: 'Ease of Dressing', 
    icon: thirdImg,
    content: 'Dressing a squirming baby can be challenging, so baby clothes are designed to make the process as easy as possible.',
  },

  { id: 4, 
    heading: 'Stylish Designs',
    icon: fourthImg, 
    content: 'While practicality is key, modern baby clothes also incorporate stylish designs. Parents enjoy dressing their children in cute, fashionable outfits that reflect their tastes. ', 
    },

  


  // Add more team members as needed
];

const Card = () => {
  return (
    <section className="all-cards">
      
     
      <div className="cards-data">
        {Cards.map(Card => (
          <CardData  key={Card.id} {...Card} />
        ))}
      </div>
      
    </section>
  );
};

export default Card;