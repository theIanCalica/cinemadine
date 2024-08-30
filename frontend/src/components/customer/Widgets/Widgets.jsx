import React from "react";
import StadiumIcon from "@mui/icons-material/Stadium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "Festival":
      data = {
        title: "Upcoming Film Festivals",
        subtitle: "Join Now",
        icon: <StadiumIcon />,
      };
      break;
    case "filmAward":
      data = {
        title: "Award Winning Films",
        subtitle: "Watch Now",
        icon: <EmojiEventsIcon />,
      };
      break;
    case "unmissable":
      data = {
        title: "Unmissable Movies",
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
