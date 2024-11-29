import { BsBookmarkCheck, BsPeople } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FcPackage } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";


import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
    const menu = [
        {
            pathName: "Overview",
            path: "/admin",
            icon: <MdDashboard />,
        },
        {
            pathName: "Package Management",
            path: "/admin/package",
            icon: <FcPackage />,
        },
        {
            pathName: "Booking Management",
            path: "/admin/booking",
            icon: <BsBookmarkCheck />,
        },
        {
            pathName: "User Management",
            path: "/admin/users",
            icon: <BsPeople />,
        },
    ];

    const location = useLocation();

    return (
        <div className="py-4 bg-white min-h-screen  overflow-y-scroll shadow-lg">
            {/* Profile */}
            <div className="flex p-4 border-b items-center gap-6">
                <FaUser className="text-4xl text-gray-800" />
                <div>
                  <Link to={'/'}>  <h1 className="text-xl font-semibold font-poppins">Roamify</h1></Link>
                    <p className="text-gray-700 text-sm">Welcome to Admin Panel</p>
                </div>
            </div>

            {/* Menu */}
            <div className="p-6 space-y-4">
                {menu.map((menuItem, idx) => (
                    <Link
                        to={menuItem.path}
                        key={idx}
                        className={`flex items-center gap-4 p-3 rounded transition-all duration-200 ${
                            location.pathname === menuItem.path
                                ? "bg-[#2095ae] text-white"
                                : "hover:bg-[#2095ae] hover:text-white text-gray-800"
                        }`}
                    >
                        <span className="text-xl">{menuItem.icon}</span>
                        <span className="text-lg font-medium">{menuItem.pathName}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
