import React from "react";
import { FaPlane, FaHome, FaShip, FaTicketAlt } from "react-icons/fa";
import CountUp from "react-countup";

const ParallaxBanner = () => {
  return (
    <div
      className="relative h-[500px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co.com/BNwbrPG/nature-beach.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          <div className="flex flex-col items-center">
            <FaPlane className="text-4xl mb-2" />
            <h2 className="text-3xl font-bold">
              <CountUp end={600} duration={3} separator="," />
            </h2>
            <p className="text-lg">Flight Booking</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHome className="text-4xl mb-2" />
            <h2 className="text-3xl font-bold">
              <CountUp end={250} duration={3} separator="," />
            </h2>
            <p className="text-lg">Amazing Tour</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShip className="text-4xl mb-2" />
            <h2 className="text-3xl font-bold">
              <CountUp end={100} duration={3} separator="," />
            </h2>
            <p className="text-lg">Cruises Booking</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTicketAlt className="text-4xl mb-2" />
            <h2 className="text-3xl font-bold">
              <CountUp end={100} duration={3} separator="," />
            </h2>
            <p className="text-lg">Ticket Booking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
