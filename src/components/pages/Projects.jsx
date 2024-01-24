import React from "react";

export const Projects = () => {
  return (
    <>
      <section
        className="projects container container--reverse"
        aria-labelledby="projects"
      >
        <div className="projects__container projects__container--prof">
          <h2 className="projects__sub-header">Professional</h2>
          <div className="projects__slider">Slider placeholder</div>
        </div>
      </section>
      <section className="projects container container--light">
        <div className="projects__container projects__container--private">
          <h2 className="projects__sub-header">Private</h2>
          <div className="projects__slider">Slider placeholder</div>
        </div>
      </section>
    </>
  );
};

export default Projects;
