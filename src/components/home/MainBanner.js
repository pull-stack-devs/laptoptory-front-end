import React from 'react';
import './styles/MainBanner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainBanner(props) {
  return (
    <section id="hero" className="banner">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-text">
              <h2>Better Solutions For Your Business</h2>
              <h4>We are team of talented dvelopers to easy your life</h4>
              <a href="/signin">Get Started</a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img src={hero} alt="img"/> */}
    </section>
  );
}

export default MainBanner;
