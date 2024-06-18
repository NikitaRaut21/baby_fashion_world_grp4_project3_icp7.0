import React from 'react';
import "./Team.css"
import TeamMember from './../TeamMembers/TeamMemners';
import Profile from "../Profile.png"
import NikitaRaut from "../NikitaRaut.jpg"
import RutujaGaikwad from "../RutujaGaikwad.jpg"
import sakshiShewale from "../SakshiShewale.jpg"
import priyankaPhadke from "../PriyankaPhadke.jpg"
import RutujaWable from "../RutujaWable.jpeg"
import RutujaMore from "../RutujaMore.jpeg"



const teamMembers = [
  { id: 1, name: 'Rutuja Gaikwad ',
    role: 'Lead Designer ',
    bio: 'Loves creating cute and innovative baby outfits.',
    image:RutujaGaikwad  },

  { id: 2, name: 'Nikita Raut',
    role: 'Founder & CEO',
    bio: 'Passionate about baby fashion and leading our vision.', 
    image: NikitaRaut},

  { id: 3, name: 'Sakski Shewale', 
    role: 'Head of Marketing',
    bio: 'Expert in crafting compelling marketing strategies.',
    image: sakshiShewale },

  { id: 4, name: 'Rutuja More',
    role: 'Product Development Manager', 
    bio: 'Ensures the quality and innovation of our products.', 
    image: RutujaMore},

  { id: 5, name: 'Rutuja Wabale',
    role: 'Customer Support Manager', 
    bio: 'Dedicated to providing excellent customer service.', 
    image: RutujaWable },

  { id: 6, 
    name: 'Sakshi Lambe', 
    role: 'Head Financial Officer', 
    bio: 'Manages our financial health and strategies.', 
    image: Profile},

  { id: 7, name: 'Priyanka Phadke', 
    role: 'Chief Financial Officer', 
    bio: 'Manages our financial health and strategies.', 
    image:  priyankaPhadke },


];

const Team = () => {
  return (
    <section className="our-team">
      <h2 >- Meet Our Team -</h2>
     
      <div className="team-members">
        {teamMembers.map(member => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
      
    </section>
  );
};

export default Team;