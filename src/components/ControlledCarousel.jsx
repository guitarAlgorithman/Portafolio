import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
          src="https://i.pinimg.com/236x/57/39/91/57399153da127ac6fe1d88512443bf3f.jpg"
          alt="Ecommerce Site example"
        />
        <Carousel.Caption>
          <h3>Ecommerce Site Example</h3>
          <p>MERN Framework</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/236x/57/39/91/57399153da127ac6fe1d88512443bf3f.jpg"
          alt="Restaurant Example"
        />
        <Carousel.Caption>
          <h3>Commercial Site Example</h3>
          <p>React JS + Firebase</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Dashboard"
        />

        <Carousel.Caption>
          <h3>Fast API - Text Mining TensorFlow</h3>
          <p>API for TextMining using Fast API in Python</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Dashboard"
        />

        <Carousel.Caption>
          <h3>Pure Javascript Site</h3>
          <p>Dashboard using Javascript and libraries like Apex Charts and Tensorflow.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Crud Javascript</h3>
          <p>
            Simple Javascript Crud
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel
