
const VideoBanner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/sea-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Costa Victoria Cochin</h1>
        <p className="text-lg md:text-2xl mt-4">
          🌍 Maldives &nbsp;&nbsp;⏳ 4 Days + 3 Nights
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
