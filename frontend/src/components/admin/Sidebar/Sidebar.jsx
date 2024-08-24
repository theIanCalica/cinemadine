import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ForumIcon from "@mui/icons-material/Forum";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Cinemax</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <li>
            <GroupOutlinedIcon className="icon" />
            <span>Users</span>
          </li>

          <p className="title">SERVICES</p>
          <li>
            <MovieCreationOutlinedIcon className="icon" />
            <span>Movies</span>
          </li>
          <li>
            <FastfoodIcon className="icon" />
            <span>Foods</span>
          </li>
          <li>
            <MovieCreationOutlinedIcon className="icon" />
            <span>Food Orders</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <EmailIcon className="icon" />
            <span>Email</span>
          </li>
          <li>
            <ForumIcon className="icon" />
            <span>Message</span>
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
