import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Section.css';
import 'aos/dist/aos.css';

function Section(props) {
  return (
    <section  className={`section-component ${props.classes}`} id={props.id}>
      <Container>
        {props.children}
      </Container>
    </section>
  );
}

export default Section;
