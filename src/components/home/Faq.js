import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import Section from './Section';
import FaqCard from './FaqCard';
import './styles/Faq.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Faq(props) {
  return (
    <Section id="faq">
      <Row>
        <Col>
          <SectionTitle title="FAQ" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div
            className="faq-cards"
            data-aos="fade-up"
            data-aos-duration="500"
          >
             <Row>
          <Col xs={6}>
              <FaqCard question="test test test" answer="test test test" />
          </Col>
          <Col xs={6}>
              <FaqCard question="test test test" answer="test test test" />
          </Col>
          <Col xs={6}>
              <FaqCard question="test test test" answer="test test test" />
          </Col>
          <Col xs={6}>
              <FaqCard question="test test test" answer="test test test" />
          </Col>
      </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Faq;
