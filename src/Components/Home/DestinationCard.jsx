import { useState } from "react";

const DestinationCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[350px] h-[500px] relative rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Label */}
      <div className="absolute top-[-20px] right-4 origin-bottom-right transform -rotate-90 bg-blue-500 text-white text-sm font-semibold py-2 px-4 z-20">
        20% OFF
      </div>

      {/* Image */}
      <img
        src={destination.image}
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
        <p className="text-white font-semibold text-lg relative">
          {destination.name}
        </p>
        <div
          className={`mt-2 h-[2px] bg-white transition-all duration-500 ${
            isHovered ? "w-56 opacity-100" : "w-16 opacity-0"
          }`}
        ></div>
      </div>

      {/* Black Background Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
          isHovered ? "opacity-20" : "opacity-0"
        }`}
      ></div>

      {/* Bottom Content (Tour Packages + Button) */}
      <div
        className={`absolute bottom-4 left-4 right-4 flex items-center justify-between transition-all duration-500 z-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-sm font-medium">Tour Packages</p>
        <button className="text-white font-medium hover:underline">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
