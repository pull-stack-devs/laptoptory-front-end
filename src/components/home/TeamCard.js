import React from 'react';
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './styles/Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function TeamCard(props) {
  return (
    <Col xs={6}>
      <div className="team-card">
        <div className="team-card-img">
          <img src={props.image} alt="" className="img-fluid d-block mx-auto" />
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
              <a href={props.linkedin}>
                <FontAwesomeIcon
                  className="social-icon"
                  size="2x"
                  icon={faLinkedinIn}
                />
              </a>
            </li>
            <li>
              <a href={props.github}>
                <FontAwesomeIcon
                  className="social-icon"
                  size="2x"
                  icon={faGithub}
                />
              </a>
            </li>
            <li>
              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    {props.email}
                  </Tooltip>
                }
              >
                  <FontAwesomeIcon
                    className="social-icon"
                    size="2x"
                    icon={faEnvelope}
                  />
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
}

export default TeamCard;
