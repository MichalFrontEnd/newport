import React from "react";
import { IconLinkList } from "../organisms";

export function Contact() {
  return (
    <section
      className="contact container container--reverse"
      id="contact"
      aria-labelledby="contact"
    >
      <div className="contact__container">
        <h2 className="contact__header">Contact</h2>
        <IconLinkList />
      </div>
    </section>
  );
}

export default Contact;
