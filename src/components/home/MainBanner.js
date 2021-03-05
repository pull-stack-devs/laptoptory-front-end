import React from 'react';
import './styles/MainBanner.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Link,Redirect} from 'react-router-dom'
import Signin from '../auth/Signin'

function MainBanner(props) {
  return (
    <section id="hero" className="banner">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-text">
              <h2>Better Solutions For Your Business</h2>
              <h4>We are team of talented dvelopers to easy your life</h4>
              <Link to="signin"onClick={()=><Redirect to="signin"><Signin/></Redirect>}>Get Started</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainBanner;
