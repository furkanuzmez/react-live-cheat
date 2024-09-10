
import React, { useState, useEffect } from 'react';

const AutoSlidingComponent = ({ live }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Slide 1: Welcome to the Auto Slider',
    'Slide 2: This is an auto sliding component',
    'Slide 3: You can manually navigate or let it auto-slide',
  ];

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);

  const componentCode = `
import React, { useState, useEffect } from 'react';

const AutoSlidingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Slide 1: Welcome to the Auto Slider',
    'Slide 2: This is an auto sliding component',
    'Slide 3: You can manually navigate or let it auto-slide',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);

  return (
    <div>
      <h2>{slides[currentSlide]}</h2>
      <button onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        Previous
      </button>
      <button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>Next</button>
    </div>
  );
};

export default AutoSlidingComponent;
`;

  if (live) {
    return (
      <div>
        <h2>{slides[currentSlide]}</h2>
        <button onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
          Previous
        </button>
        <button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>Next</button>
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default AutoSlidingComponent;
