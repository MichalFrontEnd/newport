import React from "react";
import { IconLinkList, Container } from "../organisms";
import { Grid } from '@mantine/core';

export function Contact() {
  return (
    <Container colour="reverse" id="contact">
    <Grid justify="center">
      <Grid.Col span={{ base:6,   sm: 3 }} ><h2 className="contact__header">Contact</h2></Grid.Col>
      <Grid.Col span={{ base:6,   sm: 3  }} ><IconLinkList /></Grid.Col>
    </Grid>

      </Container>
  );
}

export default Contact;
