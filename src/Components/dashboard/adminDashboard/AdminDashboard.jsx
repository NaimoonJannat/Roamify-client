import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 w-[75%] lg:w-[30%] left-0 h-full  bg-white transform transition-transform duration-300 ease-out z-20 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:static`}
            >
                <Sidebar closeSidebar={toggleSidebar} />
            </div>

            {/* Main Content */}
           

            <div className="w-full overflow-y-auto p-4 ">
            <AdminNavbar toggleSidebar={toggleSidebar} />
                    <Outlet />
                </div>
        </div>
    );
};

export default AdminDashboard;
