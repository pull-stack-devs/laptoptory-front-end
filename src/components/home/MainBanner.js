import React from 'react';
import './styles/MainBanner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function MainBanner(props) {
  return (
    <section id="hero" className="banner">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-text">
              <h2>Better Solutions For Your Business</h2>
              <h4>We are team of talented dvelopers to easy your life</h4>
              <div className="banner-btn">
              <Link to="/signin">Get Started</Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainBanner;
