import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-4 items-center`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Contact
          </NavLink>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
        </div>
        <div className="flex justify-between items-center space-x-4 ">
          <div>
            <SearchIcon className="text-white hover:text-yellow-300" />
          </div>
          <div>
            <PersonIcon className="text-white hover:text-yellow-300" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
