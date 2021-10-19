import React from 'react';
import SectionTitle from './SectionTitle';
import Section from './Section';
import { Col, Row } from 'react-bootstrap';
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
                    <h3 className="card-title">Assets Management</h3>
                    <p className="card-text">
                      Laptoptory helps you to manage your assets in the organization and keeps a record for you to ensure nothing gets lost.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-2">
                    <h3 className="card-title">Tracking Assets</h3>
                    <p className="card-text">
                      Laptoptory allows you to track your assets and see who has them and whether to get them back or not.
                    </p>{' '}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="service-card">
                  <div className="card-block block-3">
                    <h3 className="card-title">Action Logs</h3>
                    <p className="card-text">
                     Laptoptory logs the critical actions for you so you can get back to them when needed.
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