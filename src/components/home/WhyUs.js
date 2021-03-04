import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faWallet,
  faCheese,
  faMagic,
} from '@fortawesome/free-solid-svg-icons';
import './styles/WhyUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyUs(props) {
  return (
    <Section classes="why-laptoptory" id="whyLaptoptory">
      <Row>
        <Col xs={12}>
          <SectionTitle title="Why Laptoptory" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="" data-aos="fade-up" data-aos-duration="500">
            <Row>
              <Col md={4}>
                <div className="why-us-icon-container">
                  <FontAwesomeIcon
                    className="why-us-icon"
                    size="4x"
                    icon={faShieldAlt}
                  />
                </div>
                <div className="why-us-text">
                  <h3>High Security</h3>
                  <p>Laptoptory offers a multi-layered of security to make sure your data is safe.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-us-icon-container">
                  <FontAwesomeIcon
                    className="why-us-icon"
                    size="4x"
                    icon={faWallet}
                  />
                </div>
                <div className="why-us-text">
                  <h3>Competitive Pricing</h3>
                  <p>Lpatoptory offers cheap prices comparing to other alike systems.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-us-icon-container">
                  <FontAwesomeIcon
                    className="why-us-icon"
                    size="4x"
                    icon={faCheese}
                  />
                </div>
                <div className="why-us-text">
                  <h3>Ease of Use</h3>
                  <p>Laptoptory is built using the latest techology and have a fancy-look design to ensure the best user experience.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default WhyUs;
