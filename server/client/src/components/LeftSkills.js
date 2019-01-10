import React from "react";
import Skill from "./Skill";

const LeftSkills = props => {
  return (
    <div>
      <p className="w3-large">
        <b>
          <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-red" />Skills
        </b>
      </p>
      {props.skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />;
      })}
      <br />
    </div>
  );
};
export default LeftSkills;
