import * as React from "react";
import { Link } from "../../molecules";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

export function IconLinkList() {
  return (
    <ul className="icon-link-list">
      <li className="icon-link-list__list-item" role="presentation">
        <Link
          href="http://www.linkedin.com/in/michal-front"
          title="LinkedIn"
          className="icon-link-list__link"
        >
          <AiOutlineLinkedin />
        </Link>
      </li>
      <li className="icon-link-list__list-item" role="presentation">
        <Link
          href="http://www.github.com/MichalFrontEnd"
          title="Github"
          className="icon-link-list__link"
        >
          <AiOutlineGithub />
        </Link>
      </li>
      <li className="icon-link-list__list-item" role="presentation">
        <Link
          href="mailto:michal.front@outlook.com"
          title="Email"
          className="icon-link-list__link"
        >
          <AiOutlineMail />
        </Link>
      </li>
    </ul>
  );
}

export default IconLinkList;
