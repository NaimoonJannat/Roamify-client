import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Destination from "../Components/Destination/Destination";
import Registar from "../authantication/Registar";
import Login from "../authantication/Login";
import Contact from "../Components/contact/Contact";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>,
    // errorElement: 
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/destinations",
            element:<Destination></Destination>
        },
        {
            path:'/registar',
            element: <Registar/>

        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/contact',
            element: <Contact/>
        }

    ] 
    }, 
   ]); 
   
export default router;