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
                  class="img-fluid mx-auto d-block"
                />
              </Col>
              <Col xs={6}>
                <div className="about-laptoptory-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br></br> Proin varius purus suscipit, consectetur metus eu,
                    consectetur sem. <br></br>Cras at neque augue. Vestibulum id
                    nisl lacus. Morbi vel egestas eros.
                    <br></br> Sed at ultricies ipsum, eget aliquam lectus. Nulla
                    lacus erat, euismod <br></br>sed varius nec, mollis at nibh.
                    In sit amet enim tristique ex pellentesque <br></br>
                    porttitor. Mauris vehicula interdum quam a varius.
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
