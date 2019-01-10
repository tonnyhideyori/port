import React from "react";

const Skill = props => {
  const lang = props.skill.lang;
  const fluency = props.skill.fluency;
  return (
    <div>
      <p>{lang}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-red"
          style={{ width: fluency }}
        >
          {fluency}
        </div>
      </div>
    </div>
  );
};

export default Skill;
