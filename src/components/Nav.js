import React from "react";
import { Link } from "react-router-dom";
import App from "./App";
import Project from "./Project";
import Info from "./Info";

const Nav = () => {
  return (
    <div style={{ marginBottom: "0px" }}>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              Edwin
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" component={App}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/info" component={Info}>
                  Info
                </Link>
              </li>
              <li>
                <Link to="/project" component={Project}>
                  Projects
                </Link>
              </li>
              <li>
                <a target="_blank" href="https://contact-fed.herokuapp.com/">
                  Hire me!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
