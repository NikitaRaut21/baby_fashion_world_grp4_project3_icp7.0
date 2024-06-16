import React from 'react';
import "./CardData.css"
const CardData= ({ icon, heading, content  }) => {
  return (
    
    <div className="Card-data">
        <div className="heading-and-img">
      <img src={icon} alt="img" className="icon"/>
      <h3>{ heading}</h3>
      </div>
      <p>{content}</p>
      
    </div>
  
  );
};

export default CardData;