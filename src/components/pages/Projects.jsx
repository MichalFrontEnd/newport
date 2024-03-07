import React from "react";
import { ProjectsCard, Container } from "../organisms";

export const Projects = () => {
  return (
    <>
      <Container colour="reverse" id="projects">
        <ProjectsCard type="Professional">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
      </Container>
      <Container colour="base" id="projects">
        <ProjectsCard type="Private">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
      </Container>
    </>
  );
};

export default Projects;
