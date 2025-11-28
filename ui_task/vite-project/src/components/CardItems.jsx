import React from "react";

const CardItems = ({ name, role, profileImg }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={profileImg}
        style={{
          objectFit: "cover",
        }}
        alt=""
      />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default CardItems;
