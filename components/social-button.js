import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const socialButton = (props) => (
  <Col xs={12} sm={6} md={3} className="mt-4 social-button">
    <a className="social-button" href={props.link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="w-100" icon={props.icon} size="6x" />
      <h3 className="text-center mt-3">{props.title}</h3>
    </a>
  </Col>
);

export default socialButton;
