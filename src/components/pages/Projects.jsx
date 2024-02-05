import React from "react";
import { ProjectsCard } from "../organisms";

export const Projects = () => {
  return (
    <>
      <section
        className="projects container container--reverse"
        aria-labelledby="projects"
      >
        {/* <div className="projects__container projects__container--prof"> */}
        {/* <h2 className="projects__sub-header">Professional</h2> */}
        <ProjectsCard type="Professional">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
        {/* </div> */}
      </section>
      <section className="projects container container--light">
        {/* <div className="projects__container projects__container--private"> */}
        {/* <h2 className="projects__sub-header">Private</h2> */}

        <ProjectsCard type="Private">
          <div className="projects__slider">Slider placeholder</div>
        </ProjectsCard>
        {/* </div> */}
      </section>
    </>
  );
};

export default Projects;
