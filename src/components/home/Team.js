import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import { Row, Col } from 'react-bootstrap';
import asiha from '../../images/aisha.jpg';
import aseel from '../../images/aseel.jpg';
import abdulrahman from '../../images/abdulrahman.png';
import husam from '../../images/husam.JPG';
import './styles/Team.css';
function Team(props) {
  return (
    <Section>
      <Row>
        <Col xs={12}>
          <SectionTitle title="Meet The Team" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="team-cards">
            <Row>
              <TeamCard image= {abdulrahman} name="Abdulrahman Al-Janabi">A chemical engineer from the University of Jordan, who just recently has switched his career into Software Development.</TeamCard>
              <TeamCard image={asiha} name="Aisha Satouf"> A Computer Science graduate from PSUT, with passion for Front-End Development and always interested in learning the newest technologies.</TeamCard>
              <TeamCard image={aseel} name="Aseel Mesmar"> A Computer Science graduate from PSUT, with passion for Front-End Development and always interested in learning the newest technologies.</TeamCard>
              <TeamCard image={husam} name="Husam Ajour">
                A Computer Science graduate from PSUT, with passion for Front-End Development and always interested in learning the newest technologies.
              </TeamCard>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Team;
