import * as React from "react";
import { Link } from "react-scroll";
import { Flex } from "@mantine/core";

export const Navbar = () => {
  return (
    <section className="container navbar__container">
      <nav className="navbar">
        <Flex className="navbar__list" role="navigation-list">
          <Link
            to="about"
            smooth={"easeInOutQuad"}
            duration={500}
            activeClass="active"
            spy={true}
            className="navbar__link"
            aria-labelledby="about-link"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={"easeInOutQuad"}
            duration={500}
            className="navbar__link"
            spy={true}
            aria-labelledby="projects-link"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={"easeInOutQuad"}
            duration={500}
            className="navbar__link"
            spy={true}
            aria-labelledby="contact-link"
          >
            Contact
          </Link>
        </Flex>
      </nav>
    </section>
  );
};

export default Navbar;
