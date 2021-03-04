import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import Section from './Section';
import FaqCard from './FaqCard';
import './styles/Faq.css';
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
              <FaqCard question="How to check the status of a laptop?" answer="By searching student id or laptop id in students table." />
          </Col>
          <Col xs={6}>
              <FaqCard question="How can I track a laptop?" answer="By checking its availabilty in the laptops table." />
          </Col>
          <Col xs={6}>
              <FaqCard question="What's the maximum numbers of laptops for each program?" answer="Unlimited number." />
          </Col>
          <Col xs={6}>
              <FaqCard question="Can I see the laptops number with graduated students?" answer="We have a chart showing that" />
          </Col>
      </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Faq;
