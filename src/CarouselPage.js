import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselPage.css"

function CarouselPage() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 mt-5 height"
          src="https://www.grabon.in/indulge/wp-content/uploads/2021/07/Best-Baby-Shopping-Websites-India.jpg" fluid 
          alt="First slide"/>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 mt-5 height"
          src="https://www.grabon.in/indulge/wp-content/uploads/2021/07/Best-Baby-Shopping-Websites-India.jpg" fluid 
          alt="Second slide"/>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 mt-5  height"
          src="https://www.grabon.in/indulge/wp-content/uploads/2021/07/Best-Baby-Shopping-Websites-India.jpg" fluid 
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
