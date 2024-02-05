import * as React from "react";
import { Image } from "../../molecules";
import classNames from "classnames";
import { Link } from "react-scroll";
const src = "/assets/images/mfrontc.png";

export const InfoCard = ({ children, className }) => {
  const additionalClassNames = {};
  if (className !== undefined) {
    additionalClassNames[className] = true;
  }
  return (
    <div
      className={classNames("info-card", additionalClassNames)}
      aria-labelledby="info-card"
    >
      {children && children}
    </div>
  );
};

export const AboutInfoCard = () => {
  return (
    <InfoCard className="about-info-card">
      <div className="about-info-card__image-container">
        <Image
          src={src}
          alt="Michal Front"
          className="about-info-card__image"
        />
      </div>

      <div className="about-info-card__info">
        <h2 className="about-info-card__header">This is Me</h2>
        <div className="about-info-card__content">
          <p>
            A frontend developer with a strong affinity to the Front-End side of
            things, a keen eye for the tiniest of details and an appreciation of
            clean reusable code. I currently work in JavaScript, focusing mainly
            on React. While always striving to learn and implement new things, I
            also love to dive deeper into the nitty-gritty of my current stack.
          </p>
          <p>
            In my spare time I enjoy swing dancing, tabletop and boardgames,
            sewing and embroidery.
          </p>
          <p className="center">
            <em>Available for work.</em>
          </p>
        </div>
      </div>
    </InfoCard>
  );
};

export default InfoCard;
