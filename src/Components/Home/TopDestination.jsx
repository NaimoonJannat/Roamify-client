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
  ];

  return (
    <div className=" mx-auto">
      <h6 className="text-gray-500">Top Destination</h6>
      <h1 className="text-4xl font-bold mb-6">Popular Destinations</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
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
