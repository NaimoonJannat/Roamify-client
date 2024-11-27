import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Destination from "../Components/Destination/Destination";

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
        }

    ] 
    }, 
   ]); 
   
export default router;