// Slider.js
import React, { useState } from 'react';
import './Image/Style.css';
import econ from './Image/left-arrow.svg';
import econ2 from './Image/right-arrow.svg';
import img3 from './Image/img3.jpg';
import img4 from './Image/img4.jpg';
import img6 from './Image/img6.jpg';
import img8 from './Image/img8.jpg';
import img2 from './Image/img2.jpg';
import img9 from './Image/img9.jpg';
import img5 from './Image/img5.jpg';
import img7 from './Image/img7.jpg';




const sliderData = [
    {
        id: 3,
        image: img7,
        caption: 'Image 3',
      },
    {
        id: 3,
        image: img5,
        caption: 'Image 3',
      },
    {
        id: 3,
        image: img9,
        caption: 'Image 3',
      },
    {
        id: 3,
        image: img2,
        caption: 'Image 3',
      },
  {
    id: 3,
    image: img3,
    caption: 'Image 3',
  },
  {
    id: 4,
    image: img4,
    caption: 'Image 4',
  },
 
  {
    id: 6,
    image: img6,
    caption: 'Image 6',
  },
  {
    id: 8,
    image: img8,
    caption: 'Image 8',
  },
  // Add more images if needed
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <center>
      <div className="slider" id="a">
        <div id="b" className="arrow" onClick={prevSlide}>
          <img src={econ} alt="Previous" />
        </div>
        <img
          id="img"
          className="slider-image"
          src={sliderData[currentImageIndex].image}
          alt={sliderData[currentImageIndex].caption}
        />
        <div id="c" className="arrow" onClick={nextSlide}>
          <img src={econ2} alt="Next" />
        </div>
      </div>
    </center>
  );
};

export default Slider;
