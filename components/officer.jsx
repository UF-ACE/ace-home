import { Image, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';

const officer = ({ title, src, name, email, slack }) => (
    <Col xs={12} sm={10} md={3} className="mx-4">
    <h3 className="text-center mt-3">{title}</h3>
    <Image src={src} alt={title} rounded fluid />
    <p className="text-center mt-3 mb-1">{name}</p>
    <p className="text-center">
      {email ? (
        <a className="mail-button mr-2" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          {' '}
Email
        </a>
      ) : null}
      <FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} />
      {' '}
@
      {slack}
    </p>
  </Col>
);

officer.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.shape({
    srcSet: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })),
    src: PropTypes.string,
    toString: PropTypes.func,
    placeholder: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  slack: PropTypes.string.isRequired,
};

officer.defaultProps = { email: '' };

export default officer;
