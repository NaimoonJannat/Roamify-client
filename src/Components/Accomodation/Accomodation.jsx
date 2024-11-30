import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Accommodation = () => {
  const accommodations = [
    {
      id: 1,
      name: "Luxury Hotel",
      location: "Maldives",
      price: 500,
      rating: 4.5,
      type: "Hotel",
      image: "https://i.ibb.co/3kcDbJN/download.jpg",
      description: "A luxurious hotel with breathtaking ocean views.",
    },
    {
      id: 2,
      name: "Seaside Resort",
      location: "Bali",
      price: 350,
      rating: 4.8,
      type: "Resort",
      image: "https://i.ibb.co/qFpRWcM/Venice-Edits-138.webp",
      description: "A relaxing resort by the sea with premium amenities.",
    },
    // Add other accommodations similarly...
  ];

  const [filteredAccommodations, setFilteredAccommodations] =
    useState(accommodations);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = accommodations.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAccommodations(filtered);
  };

  return (
    <div className="space-y-10 p-5 mt-52">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Explore Accommodations
      </h1>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search accommodations..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-1/2 border border-gray-300 rounded-md focus:outline-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAccommodations.map((acc) => (
          <div
            key={acc.id}
            className="rounded-lg shadow-lg overflow-hidden border cursor-pointer"
            onClick={() => navigate(`/accomodation/${acc.id}`)}
          >
            <img
              src={acc.image}
              alt={acc.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{acc.name}</h2>
              <p className="text-sm text-gray-600">{acc.location}</p>
              <p className="text-sm text-gray-600">${acc.price} per night</p>
              <p className="text-sm text-yellow-500">⭐ {acc.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
