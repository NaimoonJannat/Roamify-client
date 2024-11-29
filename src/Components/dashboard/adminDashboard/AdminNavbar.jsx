import { Link } from "react-router-dom";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import logo from "../../../assets/roamify-logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const AdminNavbar = ({ toggleSidebar }) => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex border-b border-gray-500 items-center justify-between bg-blue-900 text-white px-6 py-3">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Roamify Logo" className="w-40" />
                </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-grow justify-center">
                <div className="relative w-2/3">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-full py-2 pl-4 pr-10 focus:outline-none text-gray-700"
                    />
                    <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
                        🔍 {/* You can replace this emoji with a proper search icon */}
                    </span>
                </div>
            </div>

            {/* Notification and Profile */}
            <div className="flex items-center gap-6">
                {/* Notification */}
                <div className="relative">
                    <FaBell className="text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-2 bg-blue-200 text-blue-900 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        4
                    </span>
                </div>
                {/* Messages */}
                <div className="relative">
                    <FaEnvelope className="text-xl cursor-pointer" />
                    <span className="absolute -top-1 -right-2 bg-blue-200 text-blue-900 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        4
                    </span>
                </div>
                {/* Profile */}
                <div className="flex items-center gap-2">
                  <FaUser className="w-10 h-10 rounded-full border-2 border-white"/>
                    <span className="hidden md:block font-semibold">{user?.displayName || 'Unknown'}</span>
                </div>
                {/* Three-dot icon for toggling sidebar */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden text-2xl focus:outline-none"
                    aria-label="Open Sidebar"
                >
                    &#8942;
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;
