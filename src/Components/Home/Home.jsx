import Banner1 from "./Banners/Banner1";
import ParallaxBanner from "./Banners/ParallaxBanner";
import VideoBanner from "./Banners/VideoBanner";
import PopularTours from "./popularTours";
import TopDestination from "./topDestination";
import TravelAgency from "./TravelAgency";

const Home = () => {
  return (
    <div className="space-y-40">
      <Banner1></Banner1>
      <div className="space-y-40 w-full md:w-11/12 lg:w-4/5 mx-auto">
        <TravelAgency />
      </div>
      <div>
        <PopularTours />
      </div>
      <ParallaxBanner />
      <div className="space-y-40 w-full md:w-11/12 lg:w-4/5 mx-auto">
        <TopDestination></TopDestination>
      </div>
      <VideoBanner />
    </div>
  );
};

export default Home;
