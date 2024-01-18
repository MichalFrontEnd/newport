import React from "react";
import { Image } from "../molecules";

export const About = () => {
  return (
    <section className="about container container--light" id="about">
      <div className="about__container">
        <div className="about__image">
          <Image
            src="/assets/images/mfront.png"
            alt="Michal Front"
            className="about__image-image"
          />
        </div>
        <div className="about__info">
          <h2 className="about__header">This is Me</h2>
          <p className="about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos
            placeat harum dicta consequatur dolor, ex omnis et nihil ducimus
            molestiae autem fugiat iure molestias similique doloremque vitae
            quidem nisi?
          </p>
          n
        </div>
      </div>
    </section>
  );
};

export default About;
