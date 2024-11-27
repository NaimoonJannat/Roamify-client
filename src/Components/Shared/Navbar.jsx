import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About", path: "/about" },
    { pathname: "Tours", path: "/tour" },
    { pathname: "Destinations", path: "/Destinations" },
    { pathname: "Gallary", path: "/gallary" },
    { pathname: "Blog", path: "/blog" },
    { pathname: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`absolute text-white top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ?  "sticky transition-all duration-500 ease-in-out bg-white shadow-lg" : "transition-all duration-500 ease-in-out bg-transparent border-b-gray-500 border"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
    
          <div
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#1E2A47]" : "text-white"
            }`}
          >
            <Link to="/">Roamify</Link>
          </div>

         
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#3fd0f1] ${
                  isScrolled ? "text-[#4A4A4A]" : "text-white"
                }`}
              >
                {item.pathname}
              </Link>
            ))}
          </div>


          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? "text-gray-700" : "text-black"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

     
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40`}
        >
         
          <div className="p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

 
          <ul className="mt-8 space-y-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block px-6 pb-2 pt-2 hover:bg-gray-100 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  {item.pathname}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
