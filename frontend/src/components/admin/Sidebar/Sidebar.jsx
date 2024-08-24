import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
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
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <MovieCreationOutlinedIcon />
            <span>Movies</span>
          </li>
          <li>
            <GroupOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <span>Foods</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
