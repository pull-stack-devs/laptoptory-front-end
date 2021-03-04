import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section(props) {
  return (
    <section  className={`section-component ${props.classes}`} id={props.id}>
      {/* data-aos="fade-up" data-aos-duration="500" */}
      <Container>
        {props.children}
      </Container>
    </section>
  );
}

export default Section;
