import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="text-center bg-blue-900">
        
        <div className="md:flex px-6 py-8 items-center justify-between">
            <h1 className="text-3xl  font-bold text-white">User Mangement</h1>

            <div className=" text-white">
              <ul className="p-4 rounded mt-2 bg-black flex flex-row gap-8 justify-center ">
              <li ><Link to={'/'}>Home</Link></li>
             <li className="list-disc" >   <Link to={'/admin'}>Overview</Link></li>
          <li className="list-disc">    <Link to={'/admin/booking'}>Booking  </Link></li>
              </ul>
            </div>
        </div>
        
        </div>
    );
};

export default User;