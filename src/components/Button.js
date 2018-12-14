import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Project from "./Project";
const Button = props => {
  return (
    <div className="w3-row-padding">
      <Link to="/info" component={Info}>
        <button
          className="w3-bar-item w3-btn w3-button w3-red w3-round-xxlarge"
          style={{ width: "200px", margin: "5px", height: "90px" }}
        >
          <b>INFO</b>
        </button>
      </Link>
      <Link to="project" component={Project}>
        <button
          className="w3-bar-item w3-btn w3-button w3-red w3-round-xxlarge"
          style={{ width: "200px", margin: "5px", height: "90px" }}
        >
          <b>
            {" "}
            PROJECTS <br />AND <br /> EXPERIENCE
          </b>
        </button>
      </Link>
      <a target="_blank" href="https://contact-fed.herokuapp.com/">
        <button
          className="w3-bar-item w3-btn w3-button w3-red w3-round-xxlarge"
          style={{ width: "200px", margin: "5px", height: "90px" }}
        >
          <b> HIRE ME!</b>
        </button>
      </a>
    </div>
  );
};
export default Button;
