import React, { Component } from "react";
import resumeData from "../resumeData.json";
import "../css/w3.css";
import Intro from "./intro";
import Button from "./Button";
import Br from "./Br";
import Footer from "./Footer";
import Info from "./Info";

class App extends Component {
  render() {
    return (
      <div
        className="w3-container w3-margin-top w3-center"
        style={{
          maxWidth: "100%"
        }}
      >
        <Br />
        <div
          className="w3-row-padding"
          style={{ display: "inline-block", width: "62%" }}
        >
          <Intro />
        </div>
        <Button data={resumeData} />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
