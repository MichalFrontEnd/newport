import * as React from "react";
import { Image } from "../../molecules";
import { Link } from "react-scroll";
const src = "/assets/images/mfrontc.png";

export const InfoCard = ({ children }) => {
  return (
    <div className="info-card" aria-labelledby="info-card">
      {children && children}
    </div>
  );
};

export const AboutInfoCard = () => {
  return (
    <InfoCard>
      <div className="about-info-card__image-container">
        <Image
          src={src}
          alt="Michal Front"
          className="about-info-card__image"
        />
      </div>

      <div className="about-info-card__info">
        <h2 className="about-info-card__header">This is Me</h2>
        <p className="about-info-card__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos
          placeat harum dicta consequatur dolor, ex omnis et nihil ducimus
          molestiae autem fugiat iure molestias similique doloremque vitae
          quidem nisi?
        </p>
        n
      </div>
    </InfoCard>
  );
};

export default InfoCard;
