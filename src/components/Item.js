import React from "react";

const Item = props => {
  const webLink = props.workItem.webLink ? (
    <p>
      Please click{" "}
      <a href={props.workItem.webLink}>
        <b>here</b>
      </a>{" "}
      to view the company website.
    </p>
  ) : null;
  return (
    <div className="w3-container">
      <h4 className="w3-text-red">
        <b>{props.workItem.company}</b>
      </h4>
      <h4 className="w3-text-black"> {webLink}</h4>
      <h5 className="w3-opacity">
        <b>{props.workItem.position}</b>
      </h5>
      <h6 className="w3-text-red">
        <i className="fa fa-calendar fa-fw w3-margin-right" />
        {props.workItem.timeLine}
      </h6>
      <p>{props.workItem.summary}</p>
      <hr />
    </div>
  );
};
export default Item;
