import * as React from "react";
// import { Image } from "../../molecules";
import classNames from "classnames";
// import { Link } from "react-scroll";
// const src = "/assets/images/mfrontc.png";

export const ProjectsCard = ({ children, type, className }) => {
  const additionalClassNames = {};
  if (className !== undefined) {
    additionalClassNames[className] = true;
  }
  return (
    <div
      className={classNames("projects-card", additionalClassNames)}
      aria-labelledby="projects-card"
    >
      <h2 className="projects-card__heading">Projects</h2>
      <h3 className="projects-card__sub-heading">{type}</h3>
      {children && children}
    </div>
  );
};

export default ProjectsCard;
