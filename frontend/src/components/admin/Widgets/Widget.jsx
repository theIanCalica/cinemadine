import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "User":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "Order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" />,
      };
      break;
    case "Booking":
      data = {
        title: "BOOKINGS",
        isMoney: false,
        link: "View all bookings",
        icon: <ConfirmationNumberOutlinedIcon className="icon" />,
      };
      break;
    case "Earning":
      data = {
        title: "EARNINGS",
        isMoney: false,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  // Di pa tapos
  return (
    <div className="widget">
      <div className="left">
        <span className="title"></span>
        <span className="counter">213</span>
        <span className="link">See more details</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlineOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
