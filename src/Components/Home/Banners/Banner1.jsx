import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner1 = () => {
  const sliderContent = [
    {
      image: "https://i.ibb.co.com/Bq0s004/eiffel2.jpg",
      text: "EXPLORE THE WORLD  WITH ROAMIFY",
    },
    {
      image: "https://i.ibb.co.com/0stvZd6/collos2.jpg",
      text: "EXPLORE ROME WITH ROAMIFY",
    },
    {
      image: "https://i.ibb.co.com/DDrPgqL/beach2.jpg",
      text: "DISCOVER THE WORLD WITH OUR GUIDE",
    },
  ];

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoscroll logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [sliderContent.length]);

  return (
    <div className="relative h-screen">
      {/* Slider */}
      <AwesomeSlider
        className="h-full"
        style={{
          overflow: "hidden",
        }}
        selected={currentIndex} // Change slide based on currentIndex
      >
        {sliderContent.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h2 className="w-11/12 md:w-1/4 lg:w-3/4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </AwesomeSlider>

      {/* Search Bar */}
      <div
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-4xl bg-white shadow-lg rounded-lg p-4"
      >
        <form className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Where to?"
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Destinations</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>America</option>
          </select>
          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Duration</option>
            <option>1-3 days</option>
            <option>1 week</option>
            <option>2+ weeks</option>
          </select>
          <button
            type="submit"
            className="bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Find Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner1;
