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
          src={'https://i.postimg.cc/cZQYyxqm/front.png'}
          alt="Ecommerce Site example"
        />
        <Carousel.Caption>
        <div className='slide_help'>
          <a href="https://guitaralgorithman.github.io/Ecommerce_frontend/">
          <h3>Ecommerce Site Example</h3>
          <p>MERN Framework</p>
          </a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/Cw6nHdDF/restaurant.png'}
          alt="Restaurant Example"
        />
        <Carousel.Caption className='slide_help'>
          <a href="https://jocular-longma-6fa945.netlify.app/">
          <h3>Commercial Site Example</h3>
          <p>React JS + Firebase</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/R44tvk4z/dashboard.png'}
          alt="Dashboard for Finances - Example"
        />
        <Carousel.Caption className='slide_help'>
          <a href="https://guitaralgorithman.github.io/proyecto_3_dashboard/">
          <h3>Dashboard</h3>
          <p>Apex Charts and Tensorflow in Javascript</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/sgtXFQ97/sentiment.png'}
          alt="Dashboard"
        />

        <Carousel.Caption className='slide_help'>
          <a href="https://github.com/guitarAlgorithman/sentimentAnalysis">
          <h3>Fast API - Text Mining TensorFlow</h3>
          <p>API for TextMining using Fast API in Python</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/sxVxnkPL/crud.png'}
          alt="Crud"
        />

        <Carousel.Caption className='slide_help'>
        <a href="https://guitaralgorithman.github.io/Projecto-2-CRUD/">
          <h3>Crud Javascript</h3>
          <p>
            Simple Javascript Crud
          </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/R4dHhgZJ/landing.png'}
          alt="Landing"
        />

        <Carousel.Caption className='slide_help'>
          <a href="https://guitaralgorithman.github.io/Proyecto1_LandingPage/">
          <h3>Simple Landing Page</h3>
          <p>
            Lading Page Example
          </p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'https://i.postimg.cc/kMcBV5qP/paper.png'}
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
