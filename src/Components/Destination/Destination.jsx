import Loader from "../Loader/Loader";
import HeaderBanner from "../Shared/HeaderBanner";

const Destination = () => {
    return (
        <div>
            <HeaderBanner title="Find Your Destination" subtitle="Explore The Destination You Need"></HeaderBanner>
            <Loader></Loader>
        </div>
    );
};

export default Destination;