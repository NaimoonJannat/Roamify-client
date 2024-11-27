import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import TopDestination from "./topDestination";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-5xl">Roamify</h1>
      <TopDestination></TopDestination>
      <Footer/>
    </div>
  );
};

export default Home;
