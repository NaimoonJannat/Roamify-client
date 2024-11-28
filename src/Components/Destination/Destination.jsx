
import HeaderBanner from "../Shared/HeaderBanner";
import SingleDestination from "./SingleDestination";

const Destination = () => {
    const destinations = [
        {
          id: 1,
          name: "Canada",
          image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
        },
        {
          id: 2,
          name: "Maldivs",
          image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
        },
        {
          id: 3,
          name: "London",
          image: "https://i.ibb.co/BB7rM6X/photo-1546412414-e1885259563a.jpg",
        },
      ];
    
    return (
        <div>
            <HeaderBanner title="Popular Destination" subtitle="Choose Your Destination"></HeaderBanner>
            {/* Destination gallary  */}
            <div className="w-full md:w-11/12 lg:w-4/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((destination) => (
            <SingleDestination destination={destination} key={destination.id} />
        ))}
            </div>
            </div>
        </div>
    );
};

export default Destination;