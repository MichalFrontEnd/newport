import React from "react";
import { ProjectsCard } from "../organisms";

export const Projects = () => {
  return (
    <>
      <section
        className="projects container container--reverse"
        aria-labelledby="projects"
      >
        <ProjectsCard
          type="Professional"
          className="projects__container projects__container--prof"
        >
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
      </section>
      <section className="projects container container--light">
        <ProjectsCard
          type="Private"
          className="projects__container projects__container--private"
        >
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
      </section>
    </>
  );
};

export default Projects;
