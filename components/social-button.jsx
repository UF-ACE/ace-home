import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const socialButton = ({ link, icon, title }) => (
  <Col xs={12} sm={6} md={3} className="mt-4 social-button">
    <a className="social-button" href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="w-100" icon={icon} size="6x" />
      <h3 className="text-center mt-3">{title}</h3>
    </a>
  </Col>
);

socialButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};


export default socialButton;
