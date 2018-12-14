import React from "react";
import Language from "./Language";

const Languages = props => {
  return (
    <div>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-globe fa-fw w3-margin-right w3-text-red" />Languages
        </b>
      </p>
      {props.languages.map((language, index) => {
        return <Language key={index} language={language} />;
      })}
      <br />
    </div>
  );
};
export default Languages;
