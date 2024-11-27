import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../../assets/eiffel2.jpg";
import img2 from "../../../assets/collos2.jpg";
import img3 from "../../../assets/beach2.jpg";

const Banner1 = () => {
  const sliderContent = [
    {
      image: img1,
      text: "EXPLORE THE WORLD  WITH ROAMIFY",
    },
    {
      image: img2,
      text: "EXPLORE ROME WITH ROAMIFY",
    },
    {
      image: img3,
      text: "DISCOVER THE WORLD WITH OUR GUIDE",
    },
  ];

  return (
    <div className="relative h-screen">
      {/* Slider */}
      <AwesomeSlider
        className="h-full"
        style={{
          overflow: "hidden", 
        }}
      >
        {sliderContent.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
           
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-4xl bg-white shadow-lg rounded-lg p-4"
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
