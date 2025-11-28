// Profile Card UI

// Create a simple profile card using props that shows:

// Name

// Role

// Profile image

// “Follow” button (on click, toggle between “Follow” and “Following”)

import React from "react";
import CardItems from "./CardItems";

const Card = () => {
  const defaultUrl =
    "https://lh3.googleusercontent.com/0NRRhqGnKQji4waS1B5PY2mv-IynqC5JBrr_PJ-Yt6awLYUH_UAlf8XzcOO79bEU0lZ-s9hHS0tJeWP4NGreZrBTepi6yl3U9Xj03goCqvWg4HR5=w1440-h810-n-nu";
  const data = {
    name: "vikash",
    role: "mern stack developer",
    profileImg:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/minimalist-header-photo-with-woman-with-closed-eyes-free-image.jpeg?w=600&quality=80" ||
      defaultUrl,
  };
  const { name, role, profileImg } = data;
  return <CardItems {...data} />;
};

export default Card;
