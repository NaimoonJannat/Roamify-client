
const HeaderBanner = ({ img, title, subtitle }) => {
  const defaultImg = "https://i.ibb.co.com/G2rNmDg/beach3.jpg"; 

  return (
    <div
      className="mb-20 relative w-full h-72 md:h-96 bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${img || defaultImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="z-10 text-left w-full md:w-11/12 lg:w-4/5 mx-auto">
      {subtitle && (
          <p className="mt-2 text-lg md:text-xl font-medium">{subtitle}</p>
        )}
        <h2 className="text-3xl md:text-5xl font-bold uppercase">{title}</h2>
        
      </div>
    </div>
  );
};

export default HeaderBanner;
