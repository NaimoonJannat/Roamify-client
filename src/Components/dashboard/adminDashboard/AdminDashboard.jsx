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
        <div className="grid lg:grid-cols-4">
        
         
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-white  transform transition-transform duration-300 ease-out z-20 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:static lg:col-span-1`}
            >
                <Sidebar closeSidebar={toggleSidebar} />
            </div>

            <div className="sticky col-span-3 top-0 z-10">
                <AdminNavbar toggleSidebar={toggleSidebar} />

                <Outlet/>
            </div>


           
        </div>
    );
};

export default AdminDashboard;
