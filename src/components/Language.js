import React from "react";

const Language = props => {
  const language = props.language.language;
  const fluency = props.language.fluency;
  const styleValue = { width: fluency, height: "24px" };
  return (
    <div>
      <p>{language}</p>
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-red" style={styleValue} />
      </div>
    </div>
  );
};
export default Language;
