import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import { Row, Col } from 'react-bootstrap';
import asiha from '../../images/aisha.jpg';
import aseel from '../../images/aseel.jpg';
import abdulrahman from '../../images/abdulrahman.png';
import husam from '../../images/husam1.jpg';
import './styles/Team.css';
function Team(props) {
  return (
    <Section classes="team-section">
      <Row>
        <Col xs={12}>
          <SectionTitle title="Meet The Team" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="team-cards">
            <Row>
              <TeamCard
                image={abdulrahman}
                email="aaljanabi@rocketmail.com"
                github="https://github.com/Janabi"
                linkedin="https://www.linkedin.com/in/abdulrahman-al-janabi/"
                name="Abdulrahman Al-Janabi"
              >
                A chemical engineer from the University of Jordan, who just
                recently has switched his career into Software Development.
              </TeamCard>
              <TeamCard
                email="aishasattouf1996@gmail.com"
                github="https://github.com/Aishahsatouf"
                linkedin="https://www.linkedin.com/in/aishah-satouf"
                image={asiha}
                name="Aisha Satouf"
              >
                {' '}
                Passionate pharmacist and a developer. Obsessive attention to detail, unequivocal love for making things, and mission-driven work ethic to change the world.
              </TeamCard>
              <TeamCard
                image={aseel}
                email="assoul54@gmail.com"
                github="https://github.com/Aseelsamer"
                linkedin="linkedin.com/in/aseel-mesmar-996768174"
                name="Aseel Mesmar"
              >
                {' '}
                Graduated from Amman Al-Ahliya University as a Civil Engineer. Discovered lately my passion in coding , I'm now a full stack developer.
              </TeamCard>
              <TeamCard
                image={husam}
                email="husamaj278@gmail.com"
                github="https://github.com/HusamAjour"
                linkedin="https://www.linkedin.com/in/husamajour/"
                name="Husam Ajour"
              >
                A Computer Science graduate from PSUT, with passion for
                Front-End Development and always interested in learning the
                newest technologies.
              </TeamCard>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Team;
