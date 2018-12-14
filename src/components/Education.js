import React from "react";
import EduItem from "./EduItem";

const Education = props => {
  return (
    <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-red" />Education
      </h2>
      {props.edu.map((item, index) => {
        return <EduItem key={index} school={item} />;
      })}
    </div>
  );
};
export default Education;
