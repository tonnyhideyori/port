import React from "react";

const Item = props => {
  return (
    <div className="w3-container">
      <h5 className="w3-opacity">
        <b>{props.school.institution}</b>
      </h5>
      <h6 className="w3-text-red">
        <i className="fa fa-calendar fa-fw w3-margin-right" />
        {props.school.endDate}
      </h6>
      <p>{props.school.degree}</p>
      <p>{props.school.classes}</p>
      <hr />
    </div>
  );
};
export default Item;
