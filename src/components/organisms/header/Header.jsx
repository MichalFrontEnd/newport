import * as React from "react";
import { Image } from "../../molecules";
import { ArrowButton } from "../../atoms";

export const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__container">
        <h1 className="header__heading">Michal Front</h1>
        <h2 className="header__sub-heading ">Front End Developer</h2>
        <div className="header__image">
          <Image
            src="/assets/images/mfront.png"
            alt="Michal Front"
            className="header__image-image"
          />
        </div>
        <ArrowButton className="header__button" />
      </div>
    </div>
  );
};

export default Header;
