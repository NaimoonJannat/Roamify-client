import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Destination from "../Components/Destination/Destination";
import Registar from "../authantication/Registar";
import Login from "../authantication/Login";
import Blog from "../Components/Blogs/Blog";
import BlogDetails from "../Components/BlogDetails/BlogDetails";

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
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/blog-details/:id",
            element:<BlogDetails></BlogDetails>
        },
        {
            path:'/registar',
            element: <Registar/>

        },
        {
            path:'/login',
            element: <Login/>
        }

    ] 
    }, 
   ]); 
   
export default router;