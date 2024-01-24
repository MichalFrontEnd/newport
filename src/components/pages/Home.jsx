import React from "react";
import { Helmet } from "react-helmet";

import { Header, Navbar } from "../organisms";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <main role="main">
      <Helmet>
        <title>Michal FrontEnd Developer</title>
        <meta name="description" content="Your brief portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="home-container" aria-labelledby="home">
        <Header />
        <Navbar />

        <About />
        <Projects />
        <Contact />
        {/* Add Footer here */}
      </div>
    </main>
  );
};

export default Home;
