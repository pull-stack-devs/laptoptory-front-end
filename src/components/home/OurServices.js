import React from 'react';
import SectionTitle from './SectionTitle';
import Section from './Section';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import './styles/OurServices.css';
import 'aos/dist/aos.css';
function OurServices(props) {
  return (
    <Section classes="our-services secondary-color" id="ourServices">
      <Row>
        <Col xs={12}>
          <SectionTitle title="Our Services" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="cards" data-aos="fade-up" data-aos-duration="500">
            <Row>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-1">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-2">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-3">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-4">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-5">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-6">
                    <h3 className="card-title">Special title</h3>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>{' '}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}
export default OurServices;

{
  /* <div className="container-fluid" >
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-1">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-2">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-3">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-4">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-5">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-6">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */
}
