import React from "react";
import Item from "./Item";

const WorkExperience = props => {
  return (
    <div>
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-red" />Work
        Experience
      </h2>
      {props.work.map((item, index) => {
        return <Item key={index} workItem={item} />;
      })}
    </div>
  );
};
export default WorkExperience;
