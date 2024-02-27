import React from "react";
import { ProjectsCard, Container } from "../organisms";

export const Projects = () => {
  return (
    <>
    <Container colour="reverse" id="projects">
        {/* <div className="projects__container projects__container--prof"> */}
        {/* <h2 className="projects__sub-header">Professional</h2> */}
        <ProjectsCard type="Professional">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
        {/* </div> */}
      </Container>
      <Container colour="base" id="projects">
        {/* <div className="projects__container projects__container--private"> */}
        {/* <h2 className="projects__sub-header">Private</h2> */}
        <ProjectsCard type="Private">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
        {/* </div> */}
      </Container>
    </>
  );
};

export default Projects;
