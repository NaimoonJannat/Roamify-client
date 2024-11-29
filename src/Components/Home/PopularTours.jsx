import React, { useState } from "react";
import { CiClock1, CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";

const PopularTours = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-primary text-sm font-semibold uppercase mb-2">
        Choose YOUR PLACE
      </h3>
      <h1 className="text-4xl md:text-5xl max-w-md font-bold text-gray-800 mb-4">
        Popular<span className="text-primary"> Tours</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* First Card (2 rows, 2 columns) */}
        <div
          className="relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
            $ 200
          </div>
          <img
            src="https://i.ibb.co/3kcDbJN/download.jpg"
            alt="First Destination"
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === 0 ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute ${
              hoveredIndex === 0 ? "bottom-14" : "bottom-7"
            } left-4 transition-all duration-500 z-20`}
          >
            <p className="text-white font-semibold text-lg relative">
              First Destination
            </p>
            <div
              className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
                hoveredIndex === 0 ? "w-56 opacity-100" : "w-16 opacity-0"
              }`}
            ></div>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
              hoveredIndex === 0 ? "opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-start text-white transition-all duration-500 z-20 ${
              hoveredIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaRegClock className="mr-2" />
            12 days
            <MdPeople className="mr-2 ml-2" />
            12+
            <FaLocationPin className="mr-2 ml-2" />
            12 days
          </div>
        </div>

        {/* Second Card (1 column, 2 rows) */}
        <div
          className="relative col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
            $ 5000
          </div>
          <img
            src="https://i.ibb.co/qFpRWcM/Venice-Edits-138.webp"
            alt="Venice"
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === 1 ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute ${
              hoveredIndex === 1 ? "bottom-14" : "bottom-7"
            } left-4 transition-all duration-500 z-20`}
          >
            <p className="text-white font-semibold text-lg relative">Venice</p>
            <div
              className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
                hoveredIndex === 1 ? "w-56 opacity-100" : "w-16 opacity-0"
              }`}
            ></div>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
              hoveredIndex === 1 ? "opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-start text-white transition-all duration-500 z-20 ${
              hoveredIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaRegClock className="mr-2" />
            12 days
            <MdPeople className="mr-2 ml-2" />
            12+
            <FaLocationPin className="mr-2 ml-2" />
            Italy
          </div>
        </div>

        {/* Third Card (1 row, 1 column) */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
            $ 400
          </div>
          <img
            src="https://i.ibb.co/FnQkDNx/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt="Eiffel Tower"
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === 2 ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute ${
              hoveredIndex === 2 ? "bottom-14" : "bottom-7"
            } left-4 transition-all duration-500 z-20`}
          >
            <p className="text-white font-semibold text-lg relative">
              Eiffel Tower
            </p>
            <div
              className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
                hoveredIndex === 2 ? "w-56 opacity-100" : "w-16 opacity-0"
              }`}
            ></div>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
              hoveredIndex === 2 ? "opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-start text-white transition-all duration-500 z-20 ${
              hoveredIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaRegClock className="mr-2" />
            12 days
            <MdPeople className="mr-2 ml-2" />
            12+
            <FaLocationPin className="mr-2 ml-2" />
            France
          </div>
        </div>

        {/* Fourth Card (1 row, 1 column) */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
            $ 650
          </div>
          <img
            src="https://i.ibb.co/VQV3m2p/Small-Towns-in-Europe-Assos-Greece-SCStock-Adobe-Stock-Photo-427227583-1.jpg"
            alt="Greece"
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === 3 ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute ${
              hoveredIndex === 3 ? "bottom-14" : "bottom-7"
            } left-4 transition-all duration-500 z-20`}
          >
            <p className="text-white font-semibold text-lg relative">Greece</p>
            <div
              className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
                hoveredIndex === 3 ? "w-56 opacity-100" : "w-16 opacity-0"
              }`}
            ></div>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
              hoveredIndex === 3 ? "opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-start text-white transition-all duration-500 z-20 ${
              hoveredIndex === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaRegClock className="mr-2" />
            12 days
            <MdPeople className="mr-2 ml-2" />
            12+
            <FaLocationPin className="mr-2 ml-2" />
            Greece
          </div>
        </div>

        {/* Fifth Card (1 row, 1 column) */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
            $ 900
          </div>
          <img
            src="https://i.ibb.co.com/J2Qnwnn/canada.jpg"
            alt="Mountain View"
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hoveredIndex === 4 ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute ${
              hoveredIndex === 4 ? "bottom-14" : "bottom-7"
            } left-4 transition-all duration-500 z-20`}
          >
            <p className="text-white font-semibold text-lg relative">Canada</p>
            <div
              className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
                hoveredIndex === 4 ? "w-56 opacity-100" : "w-16 opacity-0"
              }`}
            ></div>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
              hoveredIndex === 4 ? "opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-start text-white transition-all duration-500 z-20 ${
              hoveredIndex === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaRegClock className="mr-2" />
            12 days
            <MdPeople className="mr-2 ml-2" />
            12+
            <FaLocationPin className="mr-2 ml-2" />
            Canada
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
