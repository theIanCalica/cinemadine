import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Cinemax</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <MovieCreationOutlinedIcon className="icon" />
            <span>Movies</span>
          </li>
          <li>
            <GroupOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <span>Foods</span>
          </li>

          <p className="title">User</p>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Email</span>
          </li>
          <li>
            <span>Messages</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
