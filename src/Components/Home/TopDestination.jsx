import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import DestinationCard from "./DestinationCard";

const TopDestination = () => {
  const destinations = [
    {
      id: 1,
      name: "Dhaka, Bangladesh",
      image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
    },
    {
      id: 2,
      name: "Chittagong, Bangladesh",
      image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
    },
    {
      id: 3,
      name: "Sylhet, Bangladesh",
      image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
    },
    {
      id: 4,
      name: "Coxs bazar, Bangladesh",
      image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-primary text-sm font-semibold uppercase mb-2">
        Top Destination
      </h3>
      <h1 className="text-4xl md:text-5xl max-w-md font-bold text-gray-800 mb-4">
        Popular<span className="text-primary">Destinations</span>
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <DestinationCard destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopDestination;
