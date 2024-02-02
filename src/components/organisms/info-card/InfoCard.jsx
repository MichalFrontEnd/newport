import * as React from "react";
import { Image } from "../../molecules";
import { Link } from "react-scroll";

export const InfoCard = () => {
  return (
    <div
      className="info-card"
      id="header"
      aria-labelledby="header"
      role="banner"
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
      <Link
        to="about"
        smooth={"easeInOutQuad"}
        duration={500}
        activeClass="active"
        spy={true}
      ></Link>
    </div>
  );
};

export default InfoCard;
