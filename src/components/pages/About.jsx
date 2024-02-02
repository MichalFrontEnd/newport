import React from "react";
import { AboutInfoCard } from "../organisms";

export const About = () => {
  return (
    <section
      className="about container container--light"
      id="about"
      aria-labelledby="about"
    >
      <div className="about__container">
        <AboutInfoCard />
      </div>
    </section>
  );
};

export default About;
