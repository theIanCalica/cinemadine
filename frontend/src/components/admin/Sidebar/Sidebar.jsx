import React from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Cinemax</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
