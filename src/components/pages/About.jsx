import React from "react";
import { AboutInfoCard } from "../organisms";

export const About = () => {
  return (
    <section
      className="about container container--light"
      id="about"
      aria-labelledby="about"
    >
      <AboutInfoCard />
    </section>
  );
};

export default About;
