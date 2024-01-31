import classNames from "classnames";
import * as React from "react";

// export interface ILinkDefault {
//   title?: string;
//   href?: string;
//   className?: string;
//   iconLeft?: string;
//   iconRight?: string;
//   classSvgLeft?: string;
//   classSvgRight?: string;
//   attributes?: object;
//   name?: string;
// }

export function Link({ title, className, href, attributes, children }) {
  return (
    <a
      href={href}
      title={title}
      className={className ? classNames(`link ${className}`) : null}
      aria-label={`Michal Front - ${title}`}
      {...attributes}
    >
      {children ? children : null}
    </a>
  );
}

export default Link;
