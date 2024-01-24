import React from "react";
import { Helmet } from "react-helmet";

import { Header, Navbar } from "../organisms";
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
      <main aria-labelledby="home">
        <Header />
        <Navbar />

        <About />
        <Projects />
        <Contact />
        {/* Add Footer here */}
      </main>
    </div>
  );
};

export default Home;
