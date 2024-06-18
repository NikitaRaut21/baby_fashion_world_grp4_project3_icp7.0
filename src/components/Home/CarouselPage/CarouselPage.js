

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselPage.css"
import img1 from "./img/slider-img-baby-shopping.jpg"
import img2 from "./img/Slider-img-baby-shoping.jpg"
import img3 from "./img/Slider-img2-baby-shopping.jpg"

function CarouselPage() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 mt-5 height"
          src={img1} 
          alt="First slide"/>
        {/* <Carousel.Caption>
          <h5>Trust Of Mothers</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 mt-5 height"
          src={img2} 
          alt="Second slide"/>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 mt-5  height"
          src={img3} 
          alt="Third slide"/>
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPage;