import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Destination from "../Components/Destination/Destination";
import Registar from "../authantication/Registar";
import Login from "../authantication/Login";
import Contact from "../Components/contact/Contact";
import AdminDashboard from "../Components/dashboard/adminDashboard/AdminDashboard";
import Overview from "../Components/dashboard/adminDashboard/Overview";
import Package from "../Components/dashboard/adminDashboard/Package";
import Booking from "../Components/dashboard/adminDashboard/Booking";
import User from "../Components/dashboard/adminDashboard/User";
import Accommodation from "../Components/Accomodation/Accomodation";
import Accomodationdetails from "../Components/Accomodation/Accomodationdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destinations",
        element: <Destination></Destination>,
      },
      {
        path: "/accomodation",
        element: <Accommodation></Accommodation>,
      },
      {
        path: "/accomodation/:id",
        element: <Accomodationdetails></Accomodationdetails>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin",
        element: <Overview />,
      },
      {
        path: "/admin/package",
        element: <Package />,
      },
      {
        path: "/admin/booking",
        element: <Booking />,
      },
      {
        path: "/admin/users",
        element: <User />,
      },
    ],
  },
  {
    path: "/registar",
    element: <Registar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
