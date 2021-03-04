import React from 'react';
import whyus from '../../images/whyus.PNG';
import { Row, Col } from 'react-bootstrap';
import Section from './Section';
import SectionTitle from './SectionTitle';
import './styles/AboutLaptoptory.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutLaptoptory(props) {
  return (
    <Section classes="about-laptoptory-section" id="aboutLaptoptory">
      <Row>
        <Col xs={12}>
          <SectionTitle title="About Laptoptor" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div
            className="about-laptoptory-content"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Row>
              <Col xs={6}>
                <img
                  src={whyus}
                  alt="whyus"
                  className="img-fluid mx-auto d-block"
                />
              </Col>
              <Col xs={6}>
                <div className="about-laptoptory-text">
                  <p>
                    Laptoptory is a web application that will track all the
                    student's or employee's laptop status, whether they get one
                    from the inventory, or returns the laptop to it. Also, the
                    user can check the persons information, and the list of
                    laptops in the inventory that matches the specified
                    requirements & assign matched laptops to specific person &
                    gives a tracking informations to the user about all the
                    saved laptops in the database.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default AboutLaptoptory;
