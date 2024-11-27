
import Banner1 from "./Banner1/Banner1";
import TopDestination from "./TopDestination";
import TravelAgency from "./TravelAgency";

const Home = () => {
    return (
        <div className="space-y-40">
            <Banner1></Banner1>
            <div className="space-y-40 w-full md:w-11/12 lg:w-4/5 mx-auto">
            <TravelAgency />
            <TopDestination />
            </div>
        </div>
    );
};

export default Home;
