

const TravelAgency = () => {
  return (
    <section className="container mx-auto px-8 mt-10 ">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-primary text-sm font-semibold uppercase mb-2">
            The Best Travel Agency
          </h3>
          <h1 className="text-4xl md:text-5xl max-w-md font-bold text-gray-800 mb-4">
            Discover the <span className="text-primary">World</span> with Our Guide
          </h1>
          <p className="text-gray-600 text-wrap mb-4">
            You can choose any country with good tourism. Agency elementum sesue
            the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec
            in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
          </p>
          <p className="text-gray-600 text-wrap mb-6">
            Hotel ut nisl quam vestibulum ac quam nec odio elementum ceisue the
            miss varius natoque penatibus et magnis dis parturient monte.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-primary mr-2">✔</span>
              20 Years of Experience
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✔</span>
              150+ Tour Destinations
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-gray-600">For information</p>
            <p className="text-primary text-xl font-bold">855 333 4444</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2">
          {/* Background Color with Shadow */}
          <div className="absolute bg-primary lg:w-[500px] w-full h-full -z-10 top-4 left-4 lg:top-8 lg:left-8"></div>

          {/* Image with Hover Animation */}
          <img
            src="/about01.png"
            alt="Travel Destination"
            className="w-full md:w-[500px] object-cover rounded transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default TravelAgency;
