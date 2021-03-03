import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section(props) {
  return (
    <section data-aos="fade-up" data-aos-duration="500" className={`section-component ${props.classes}`} id={props.id}>
      <Container>
        {props.children}
      </Container>
    </section>
  );
}

export default Section;
