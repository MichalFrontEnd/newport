import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";

import { Header } from "../organisms/header";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Michal FrontEnd Developer</title>
        <meta name="description" content="Your brief portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <Link to="about" smooth={"easeInOutQuad"} duration={500}>
        About
      </Link>
      <Link to="projects" smooth={"easeInOutQuad"} duration={500}>
        Projects
      </Link>
      <Link to="contact" smooth={"easeInOutQuad"} duration={500}>
        Contact
      </Link>

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
