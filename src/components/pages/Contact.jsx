import React from "react";
import { IconLinkList, Container } from "../organisms";

export function Contact() {
  return (
    <Container colour="reverse" id="contact">
      <div className="contact__container">
        <h2 className="contact__header">Contact</h2>
        <IconLinkList />
      </div>
      </Container>
  );
}

export default Contact;
