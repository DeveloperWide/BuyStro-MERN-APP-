import React, { useRef, useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg",
  "https://images.pexels.com/photos/8386665/pexels-photo-8386665.jpeg",
  "https://i.pinimg.com/1200x/53/29/63/53296318765b637b8ccd9b50082a4b07.jpg",
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
  "https://i.pinimg.com/1200x/b3/8a/0e/b38a0e382cb9d81638cd951364e0c5b0.jpg",
];

const ImageSlider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const totalSlides = images.length;
  const sliderRef = useRef(null);

  // --- Auto slide effect ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    // cleanup to prevent multiple intervals
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="flex items-center justify-center mx-2 my-8">
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Slider */}
      <div className="w-[100%] object-cover overflow-hidden relative rounded-xl">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currSlide * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full flex-shrink-0 object-center rounded-xl"
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
