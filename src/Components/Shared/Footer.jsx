
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import logo from "../../assets/roamify-logo.png"
const Footer = () => {
  return (
    <footer className="bg-blue-900 mt-24 footer max-w-1400px mx-auto text-white py-10">

<div className="flex flex-col lg:flex-row px-4 lg:px-0  justify-center py-4  w-[90%]  mx-auto border-gray-400 lg:gap-14 border space-y-4">
            <div className="flex border-b border-b-gray-500 lg:border-b-0  items-center pb-4 lg:pb-0 lg:border-r pr-16 space-x-4">
              <div className="bg-[#2095ae] p-4 ">
              <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold">Call us</h4>
                <p>+1 123-456-0606</p>
              </div>
            </div>
            <div className="flex border-b border-b-gray-500 lg:border-b-0 lg:pb-4  items-center pb-4 lg:border-r pr-16  space-x-4">
              <div className="bg-[#2095ae] p-4 ">
               <IoMailOpenOutline/>
              </div>
              <div>
                <h4 className="font-bold">Write to us</h4>
                <p>info@roamify.com</p>
              </div>
            </div>
            <div className="flex lg:pb-4 items-center  space-x-4">
              <div className="bg-[#2095ae] p-4 ">
             <MdOutlineAddLocationAlt/>
              </div>
              <div>
                <h4 className="font-bold">Address</h4>
                <p>24 King St, SC 29401 USA</p>
              </div>
            </div>
          </div>

      <div className=" mx-auto">

    
        <div className=" ">
    
        

     
          <div className="lg:space-y-4 lg:grid gap-2 w-[90%] mx-auto grid-cols-3 space-y-8 mt-12">
            <div>
            <h2 className="text-2xl font-bold"><img src={logo} alt="" className="w-40" /></h2>
            <p>
              Quisque imperdiet sapien porttitor the bibendum. Sellesque the
              commodo erat acar accumsa lobortis, enim diam the nesuen.
            </p>
            </div>
            
            <div className="flex flex-col justify-center mx-auto">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Blog
                </a>
              </li>
            </ul>
            </div>
            <div>
              <h4 className="font-bold">Subscribe</h4>
              <p>Sign up to stay informed about travel and tours</p>
              <div className="flex mt-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-4  bg-white text-black"
                />
                <button className="p-4 bg-[#2095ae] text-white ">
                  Send
                </button>
              </div>
            </div>

          </div>
          
           
       
          <div className="space-y-4 flex mx-auto">
          
           
          </div>
        </div>
        <div className=" ml-4 lg:ml-0 lg:text-center mt-8">
          <p>&copy;2023 Roamify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;