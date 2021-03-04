import React from 'react';
import { Col } from 'react-bootstrap';
import './styles/Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function TeamCard(props) {
  return (
    <Col xs={6}>
      <div className="team-card">
        <div className="team-card-img">
          <img
            src={props.image}
            alt=""
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="team-card-name">
          <h3>{props.name}</h3>
        </div>
        <div className="team-card-text">
          <p>{props.children}</p>
        </div>
        <div className="team-card-social">
          <ul>
            <li>
              {' '}
              <FontAwesomeIcon
                className="why-us-icon"
                size="2x"
                icon={faLinkedinIn}
              />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                className="why-us-icon"
                size="2x"
                icon={faGithub}
              />
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                className="why-us-icon"
                size="2x"
                icon={faEnvelope}
              />
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
}

export default TeamCard;
