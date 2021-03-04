import React from 'react';
import Slider from './Slider';
import { Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import Section from './Section';
import avatar from '../../images/avatar.png';
import './styles/Testimonials.css';
import 'aos/dist/aos.css';
function Testimonials(props) {
  return (
    <Section classes="testinmonails secondary-color" id="testimonials">
      <Row>
        <Col xs={12}>
          <SectionTitle title="Testimonials" />
        </Col>{' '}
      </Row>
      <Row>
        <Col xs={12}>
          <div className="testimonials-cards" data-aos="fade-up" data-aos-duration="500">
            <Row>
              <Col xs={12}>
                <Slider
                  options={{
                    autoPlay: 4000,
                    pauseAutoPlayOnHover: true,
                    initialIndex: 2,
                    wrapAround: true,
                    adaptiveHeight: true,
                  }}
                >
                  <Col xs={4}>
                    <div className="carousel-cell">
                      <div className="tesimonial-avatar">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      <div className="tesimonial-text">
                        <h3>Rawan</h3>
                        <p>
                          The system is very easy to use and have a fancy design.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="carousel-cell">
                      <div className="tesimonial-avatar">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      <div className="tesimonial-text">
                        <h3>Esra'a</h3>
                        <p>
                          The system is so reliable and offers many features.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="carousel-cell">
                      <div className="tesimonial-avatar">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      <div className="tesimonial-text">
                        <h3>Anolla</h3>
                        <p>
                         The security is really great and only approved users can enter.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="carousel-cell">
                      <div className="tesimonial-avatar">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      <div className="tesimonial-text">
                        <h3>Mahmoud</h3>
                        <p>
                          Considering the features that this system offers, their pricing is really good.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Slider>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Testimonials;
