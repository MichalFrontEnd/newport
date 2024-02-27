import * as React from "react";
import classNames from "classnames";

export const Container = ({colour, id, children}) => {
  const additionalClassNames = {};
  if (colour) {
    additionalClassNames[`container--${colour}`] = true;
  }
  if (id) {
    additionalClassNames[`container--${id}`] = true;
  }
  console.log('additionalClassNames: ', additionalClassNames);
  return (
    <section
      // className="contact container container--reverse"
      className={classNames("container", additionalClassNames)}

      id={id}
      aria-labelledby={id}
    >
      {children && children}
    </section>
  );
};

export default Container;
