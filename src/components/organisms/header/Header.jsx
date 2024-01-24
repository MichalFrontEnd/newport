import * as React from "react";
import { Image } from "../../molecules";
import { ArrowButton } from "../../atoms";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div
      className="header header__container"
      id="header"
      aria-labelledby="header"
    >
      <h1 className="header__heading">Michal Front</h1>
      <h2 className="header__sub-heading ">Front End Developer</h2>
      <div className="header__image">
        <Image
          src="/assets/images/mfront.png"
          alt="Michal Front"
          className="header__image-image"
        />
      </div>
      <Link>
        <ArrowButton
          className="header__button"
          to="about"
          smooth={"easeInOutQuad"}
          duration={500}
          activeClass="active"
          spy={true}
        />
      </Link>
    </div>
  );
};

export default Header;
