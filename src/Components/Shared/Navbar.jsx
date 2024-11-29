import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/roamify-logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logout button triggered");
    
      window.location.reload();
    } catch (error) {
      toast.error(error?.message)
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About", path: "/about" },
    { pathname: "Tours", path: "/tour" },
    { pathname: "Destinations", path: "/destinations" },
    { pathname: "Gallery", path: "/gallery" },
    { pathname: "Blog", path: "/blog" },
    { pathname: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "sticky bg-white shadow-lg"
            : "bg-transparent border-b border-gray-500"
        }`}
      >
        <Toaster/>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <div className={`text-2xl font-bold ${isScrolled ? "text-[#1E2A47]" : "text-white"}`}>
            <Link to="/">
              <img src={logo} alt="Roamify Logo" className="w-40" />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  isScrolled ? "text-[#4A4A4A] hover:text-[#2095ae]" : "text-white hover:text-[#3fd0f1]"
                }`}
              >
                {item.pathname}
              </Link>
            ))}

            {!user?.email ? (
              <Link
                to="/login"
                className="py-2 px-4 bg-[#2095ae] text-white rounded-md hover:bg-[#1b7c94] transition"
              >
                Sign In
              </Link>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center text-[#4A4A4A] hover:text-[#2095ae] text-lg"
                  onClick={toggleDropdown}
                >
                  <FaUserCircle className="text-2xl" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                    <p className="px-4 py-2 text-gray-700 border-b">{user?.displayName || "Anynomous"}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-[#2095ae] transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40`}
        >
          <div className="p-4">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="mt-8 space-y-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block px-6 pb-2 pt-2 hover:bg-gray-100 hover:text-blue-500 transition transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  {item.pathname}
                </Link>
              </li>
            ))}

            {!user ? (
              <li>
                <Link
                  to="/login"
                  className="block px-6 py-2 bg-[#2095ae] text-white rounded-md hover:bg-[#1b7c94] transition"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
              </li>
            ) : (
              <li className="relative">
                <button
                  className="block px-6 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-[#2095ae] transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMenu}></div>}
      </nav>
    </>
  );
};

export default Navbar;
