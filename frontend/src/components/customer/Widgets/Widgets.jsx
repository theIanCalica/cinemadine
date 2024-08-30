import React from "react";
import StadiumIcon from "@mui/icons-material/Stadium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TheatersIcon from "@mui/icons-material/Theaters";
import "./Widget.scss";
import filmstripImage from "../../../assets/images/filmstrip.png";
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "Festival":
      data = {
        title: "Upcoming Film Festivals",
        subtitle: "Join Now",
        icon: (
          <StadiumIcon
            classname="icon"
            style={{
              color: "white",
            }}
          />
        ),
      };
      break;
    case "filmAward":
      data = {
        title: "Award Winning Films",
        subtitle: "Watch Now",
        icon: (
          <EmojiEventsIcon
            classname="icon"
            style={{
              color: "white",
            }}
          />
        ),
      };
      break;
    case "unmissable":
      data = {
        title: "Unmissable Movies",
        subtitle: "Get Ticket",
        icon: (
          <TheatersIcon
            className="icon"
            style={{
              color: "white",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget mx-2 flex justify-center items-center  relative bg-black h-48 w-full">
      <img
        src={filmstripImage}
        className="absolute inset-0 m-auto object-cover w-1/2 h-1/2 z-0 opacity-15"
        alt="Filmstrip"
      />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-xl font-bold">{data?.title}</h1>
        <p className="text-sm">{data?.subtitle}</p>
      </div>
      <div className="relative z-10">{data?.icon}</div>
    </div>
  );
};

export default Widgets;
