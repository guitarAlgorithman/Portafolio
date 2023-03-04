import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slides.css"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/front.png'}
          alt="Ecommerce Site example"
        />
        <Carousel.Caption>
        <div className='slide_help'>
          <h3>Ecommerce Site Example</h3>
          <p>MERN Framework</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/restaurant.png'}
          alt="Restaurant Example"
        />
        <Carousel.Caption className='slide_help'>
          <h3>Commercial Site Example</h3>
          <p>React JS + Firebase</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/dashboard.png'}
          alt="Dashboard for Finances - Example"
        />
        <Carousel.Caption className='slide_help'>
          <h3>Dashboard</h3>
          <p>Apex Charts and Tensorflow in Javascript</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/sentiment.png'}
          alt="Dashboard"
        />

        <Carousel.Caption className='slide_help'>
          <h3>Fast API - Text Mining TensorFlow</h3>
          <p>API for TextMining using Fast API in Python</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/crud.png'}
          alt="Crud"
        />

        <Carousel.Caption className='slide_help'>
          <h3>Crud Javascript</h3>
          <p>
            Simple Javascript Crud
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/landing.png'}
          alt="Landing"
        />

        <Carousel.Caption className='slide_help'>
          <h3>Simple Landing Page</h3>
          <p>
            Lading Page Example
          </p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'../../images/paper.png'}
          alt="Landing"
        />

        <Carousel.Caption className='slide_help'>
          <h3>Optimization Intenger Programming Model</h3>
          <p>
            Optimization Scheduling implemented (paper on progress)
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel
