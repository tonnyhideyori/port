import React from "react";
import Pic from "./pic";
import Adress from "./Adress";
import LeftSkills from "./LeftSkills";
import Languages from "./Languages";
import Education from "./Education";
import Footer from "./Footer";
import Nav from "./Nav";

const Info = props => {
  return (
    <div>
      <Nav />
      <div
        className="w3-display-container w3-center w3-row"
        style={{
          display: "inline-block",
          width: "100%",
          maxWidth: "1400px",
          background: "pale_red"
        }}
      >
        <div className="w3-half w3-container w3-card-2 w3-white w3-margin-bottom">
          <div className="w3-row-padding">
            <Pic />
            <Adress />
            <Education edu={props.data.edu} />
          </div>
        </div>

        <div
          className="w3-half w3-container w3-card-2 w3-white w3-margin-bottom"
          style={{ height: "1125px" }}
        >
          <div className="w3-row-padding">
            <LeftSkills skills={props.data.skills} />
            <Languages languages={props.data.languages} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Info;
