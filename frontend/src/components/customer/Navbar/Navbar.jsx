import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-red-500">
      <div className="flex container items-center justify-between mx-auto p-4">
        <div>
          <h1 className="text-white">Cinemadine</h1>
        </div>
        <div className="md:hidden">
          <MenuIcon className="text-white text-sm" />
        </div>
        <div className="flex justify-between items-center space-x-4">
          <a href="#">Home</a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
