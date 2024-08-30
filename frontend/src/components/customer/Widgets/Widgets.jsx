import React from "react";
import StadiumIcon from "@mui/icons-material/Stadium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TheatersIcon from "@mui/icons-material/Theaters";
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
    <div className="widgets">
      <div></div>
    </div>
  );
};

export default Widgets;
