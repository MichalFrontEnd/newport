import * as React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <section className="container navbar__container">
      <nav className="navbar">
        <ul className="navbar__list">
          <Link
            to="about"
            smooth={"easeInOutQuad"}
            duration={500}
            activeClass="active"
            spy={true}
            className="navbar__link"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={"easeInOutQuad"}
            duration={500}
            className="navbar__link"
            spy={true}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={"easeInOutQuad"}
            duration={500}
            className="navbar__link"
            spy={true}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
