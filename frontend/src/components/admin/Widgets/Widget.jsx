import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">213</span>
        <span className="link">See more details</span>
      </div>
      <div className="right">
        <KeyboardArrowUpIcon />
        <div className="percentage">20%</div>
      </div>
      <PersonOutlineOutlinedIcon />
    </div>
  );
};

export default Widget;
