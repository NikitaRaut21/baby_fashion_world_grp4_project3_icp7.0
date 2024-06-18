import React, { useState } from 'react';

import blog from "./img/blog.png";
import "./Toggler.css"
import prev from './img/previous (1).png'
import next from './img/next.png'

const ImageChanger = () => {

    
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const images = ['https://m.media-amazon.com/images/I/6151bQ2QmrL._SX679_.jpg','https://images.pexels.com/photos/982189/pexels-photo-982189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
     'https://cdn.fcglcdn.com/brainbees/images/products/438x531/13347143a.webp', 'https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg',
    'https://cdn.shopify.com/s/files/1/1993/5303/t/17/assets/baby_boy_best_sellers-1666367923643.jpeg?v=1666367925','https://image.made-in-china.com/2f0j00RdUlcoAKnakp/Fashion-Children-Clothes-Summer-Cotton-Baby-Girl-Dresses-Comfortable-Girls-Clothing.webphttps://m.media-amazon.com/images/I/61Ei0my-jYL._SY879_.jpg'];
  
  
  
  
    const texes = ["We are in it together - raising the future.  We are a tribe of future makers. So let's support each other.Sturdiness is the first criterion when buying an umbrella. Your umbrella must not only shelter its owner from the rain: it must also withstand gusts of wind, and the climatic hazards of different regions. Choosing a wind-resistant umbrella(link to editorial page to be created next Wind-resistant umbrella) is a guarantee that the item is reliable and durable. Its resistance depends on the quality of the materials used in its manufacture.",
    'A child learning to walk receives important sensory information from the soles of their feet touching the ground. Footwear helps to protect their feet from injury and from the heat and the cold.When toddlers are learning to walk, they should be in bare feet or a soft soled shoe as much as possible so they can feel what they touch with their feet and develop muscle strength.When toddlers have been walking on their own confidently for a period of time, they can progress to a firmer soled shoe.',
    "Whether you prefer the full zip-up style of baby rain jacket for easy accessibility or don't mind rain gear that can be pulled up quickly - our best sellers are designed to keep your baby comfortable and safe at all times. Even if it's a bright and sunny day out, you can never know when a dark cloud will show up unexpectedly. Fold these infant rain jackets into your backpack so you're always prepared to keep your baby dry and protected.",
     "Things they can reach for, hold, suck on, shake, make noise with—rattles, large rings, squeeze toys, teething toys, soft dolls, textured balls, and vinyl and board books. Things to listen to—books with nursery rhymes and poems, and recordings of lullabies and simple songs.lder babies are movers—typically they go from rolling over and sitting, to scooting, bouncing, creeping, pulling themselves up, and standing. ",
 
     "How can one imagine the young, free-spirited, and cute-shy boys being left behind when mom and dad are the fashion icons of their generation? Boy's fashion is constantly changing, but casual wear and sportswear for baby boys, such as smart T-shirts, cosy shorts and joggers, and stylish sweatshirts and hoodies, is a wardrobe essential. As a parent, you must carefully select a contemporary assortment of your baby boy online that will transform your young one into a style icon. Finding the best baby boy apparel online is no longer a daunting task.",

     "Welcome to our page dedicated to baby girls! We offer a wide range of clothing, apparel, and accessories to keep your little one looking stylish and comfortable. From dresses to shorts, we have everything you need to complete your baby girl's wardrobe.Baby Girl Clothes:Our collection of baby girl clothes features a variety of styles and designs to choose from. Whether you're looking for special occasion outfits or casual everyday wear, we have you covered. With options for every season and occasion, you're sure to find the perfect clothes for your baby girl.Baby Girl Dresses:In addition to clothes."]
 
 
     const IncreaseIndex = () => {
    setImageIndex((imageIndex + 1) % images.length);
    setTextIndex((textIndex + 1) % texes.length);
  };

  const decreaseIndex = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
    setTextIndex((textIndex - 1 + texes.length) % texes.length);
  };

  return (

    <div className='Toggler'>
    <div className='toggler-content'>

        <div className='toggler-component'>
      <img src={images[imageIndex]} className='img' alt="Displayed" />

      </div>

      <div className='toggler-component'>
        {texes[textIndex]}
        </div>

        </div>

      <div className='icons-div'>
      <img src={prev} onClick={IncreaseIndex} className='icon'></img>
      <img src={next} onClick={decreaseIndex} className='icon'></img>
      
    </div>

    </div>
  );
};

export default ImageChanger;
