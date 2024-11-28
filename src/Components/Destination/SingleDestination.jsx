import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const SingleDestination = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="md:w-[350px] h-[300px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Label */}
      {/* <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
        20% OFF
      </div> */}

      {/* Image */}
      <img
        src={destination.image_url}
        alt={destination.name}
        className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          isHovered ? "scale-110" : ""
        }`}
      />

      {/* Name + Line */}
      <div
        className={`absolute ${
          isHovered ? "bottom-14" : "bottom-7"
        } left-4 transition-all duration-500 z-20`}
      >
        <div className="flex justify-center items-center">
        <IoLocationOutline className="text-white font-bold" />
        <p className="text-white font-bold text-xl relative">
          {destination.country}
        </p>
        </div>
        <div
          className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
            isHovered ? "w-56 opacity-100" : "w-16 opacity-0"
          }`}
        ></div>
      </div>

      {/* Black Background Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
          isHovered ? "opacity-40" : "opacity-20"
        }`}
      ></div>

      {/* Bottom Content (Tour Packages + Button) */}
      <div
        className={`absolute bottom-4 left-4 right-4 flex items-center justify-between transition-all duration-500 z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-sm font-medium">Visit {destination.best_time_to_visit}</p>
        <div className="flex justify-center items-center gap-2 text-white font-medium hover:underline">
          Explore <FaArrowRightLong className="text-white" />
          
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
