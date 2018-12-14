import React from "react";
const Pic = props => {
  return (
    <div className="w3-display-container">
      <img
        src={require("../image/ed.jpg")}
        style={{ width: "100%" }}
        alt="Avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black" />
    </div>
  );
};
export default Pic;
