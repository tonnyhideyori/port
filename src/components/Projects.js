import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = props => {
  return (
    <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-red" />Projects
      </h2>
      {props.projects.map((item, index) => {
        return <ProjectItem key={index} project={item} />;
      })}
    </div>
  );
};
export default Projects;
