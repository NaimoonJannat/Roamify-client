import React from "react";
import useFetch from "../../Hooks/useFetch";
import HeaderBanner from "../Shared/HeaderBanner";
import SingleDestination from "./SingleDestination";
import Loader from "../Loader/Loader";

const Destination = () => {
    // Use the custom hook to fetch destinations
    const { data: destinations, loading, error } = useFetch("http://localhost:5000/api/destinations");

    return (
        <div>
            <HeaderBanner title="Popular Destination" subtitle="Choose Your Destination" />
            {/* Destination gallery */}
            <div className="w-full md:w-11/12 lg:w-4/5 mx-auto">
                {loading && <Loader></Loader>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {destinations.map((destination) => (
                            <SingleDestination destination={destination} key={destination.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Destination;
