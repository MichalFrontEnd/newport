import * as React from "react";
import { Link } from "../../molecules";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

export function IconLinkList() {
  return (
    <div className="icon-link-list">
      <Link
        href="http://www.linkedin.com/in/michal-front"
        title="LinkedIn"
        className="icon-link-list__list-item"
      >
        <AiOutlineLinkedin />
      </Link>
      <Link
        href="http://www.github.com/MichalFrontEnd"
        title="Github"
        className="icon-link-list__list-item"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        href="mailto:michal.front@outlook.com"
        title="Email"
        className="icon-link-list__list-item"
      >
        <AiOutlineMail />
      </Link>
    </div>
  );
}

export default IconLinkList;
