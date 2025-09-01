import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-semibold">Digital Kadam</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400 transition-colors duration-200">
          Home
        </Link>
        <Link to="/coursecard" className="hover:text-yellow-400 transition-colors duration-200">
          Course 
        </Link>
        <Link to="/signin" className="hover:text-yellow-400 transition-colors duration-200">
          Sign In
        </Link>
        {/* <Link to="/questionlist" className="hover:text-yellow-400 transition-colors duration-200">
          Learn
        </Link> */}
        
      </div>
    </nav>
  );
};

export default Navbar;