import React, { useRef, useState } from "react";

const images = [
  "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg",
  "https://images.pexels.com/photos/8386665/pexels-photo-8386665.jpeg",
  "https://i.pinimg.com/1200x/53/29/63/53296318765b637b8ccd9b50082a4b07.jpg",
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
  "https://i.pinimg.com/1200x/b3/8a/0e/b38a0e382cb9d81638cd951364e0c5b0.jpg",
];

/* 

const slider = document.getElementById('slider');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentSlide = 0;
    const totalSlides = slider.children.length;

    function goToSlide(index) {
        const slideWidth = slider.children[0].clientWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    let slideInterval = setInterval(nextSlide, 3000);

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    window.addEventListener('resize', () => goToSlide(currentSlide));

    goToSlide(currentSlide);

*/

const ImageSlider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length - 1;

  function goToSlide(index) {
    setCurrSlide(index);
  }

  const handlePrev = () => {
    setCurrSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  let slideInterval = setInterval(handleNext, 3000);

  return (
    <div className="flex items-center justify-center my-10 mx-2">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Slider Container */}
      <div className="w-full max-w-4xl overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currSlide * 100}%)`,
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="md:p-2 p-1 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
