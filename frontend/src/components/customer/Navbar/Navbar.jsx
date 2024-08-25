import React from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <img src="" alt="" />
          <span>Cinemax</span>
        </div>
        <div className="items">
          <a href="/" className="item">
            Home
          </a>
          <div className="item">
            Movies
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            Events
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">About Us</div>
          <div className="item">
            News
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
