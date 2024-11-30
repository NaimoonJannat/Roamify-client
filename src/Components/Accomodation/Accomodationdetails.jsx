import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles

const Accomodationdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
  ];

  const accommodation = accommodations.find((acc) => acc.id === parseInt(id));

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    startDate: null,
    endDate: null,
    nights: 0,
  });

  // Function to calculate the number of nights
  const calculateNights = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const differenceInTime = endDate - startDate;
    return Math.max(Math.ceil(differenceInTime / (1000 * 3600 * 24)), 0); // Ensure no negative values
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const totalCost = accommodation.price * bookingDetails.nights;
    alert(
      `Booking successful for ${bookingDetails.name}! Total cost: $${totalCost}`
    );
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleDateChange = (date) => {
    if (date.length === 2) {
      const [start, end] = date;
      const nights = calculateNights(new Date(start), new Date(end));
      setBookingDetails({
        ...bookingDetails,
        startDate: new Date(start),
        endDate: new Date(end),
        nights,
      });
    }
  };

  // Helper function to format dates in MM/DD/YYYY format
  const formatDate = (date) => {
    return date ? date.toLocaleDateString() : "";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-36">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-4 hover:underline"
      >
        &larr; Back to Accommodations
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Accommodation Info */}
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            {accommodation.name}
          </h1>
          <p className="text-lg text-gray-600">{accommodation.location}</p>
          <p className="text-lg font-semibold text-gray-700">
            ${accommodation.price} per night
          </p>
          <p className="text-yellow-500 text-lg">⭐ {accommodation.rating}</p>
          <p className="text-gray-800 leading-relaxed">
            {accommodation.description}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleBooking}
        className="mt-10 bg-white p-6 shadow-md rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Book Your Stay</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={bookingDetails.name}
          onChange={handleInputChange}
          required
          className="p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={bookingDetails.email}
          onChange={handleInputChange}
          required
          className="p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Stay Dates
          </label>
          <input
            type="text"
            value={`${formatDate(bookingDetails.startDate)} - ${formatDate(
              bookingDetails.endDate
            )}`}
            readOnly
            className="p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Select dates"
          />
          <div className="p-3 mt-2 bg-gray-50 border border-gray-300 rounded-md">
            <Calendar
              selectRange={true}
              value={[bookingDetails.startDate, bookingDetails.endDate]}
              onChange={handleDateChange}
              minDate={new Date()}
            />
          </div>
        </div>

        {/* Total Cost */}
        <div className="text-lg font-semibold text-gray-700">
          Number of Nights: {bookingDetails.nights}
        </div>
        <div className="text-lg font-semibold text-gray-700">
          Total Cost: ${accommodation.price * bookingDetails.nights}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Accomodationdetails;
