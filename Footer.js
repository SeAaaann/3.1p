import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '1em 0em' }}>
    <Container textAlign="center">
      <p>&copy; {new Date().getFullYear()} DEV@Deakin. All Rights Reserved.</p>
      <p>Follow us on <a href="#">Social Media</a></p>
    </Container>
  </Segment>
);

export default Footer;
