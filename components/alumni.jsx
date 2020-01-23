import { Image, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const alumni = ({ name, src, roles, dateGraduated, major, company, slack, linkedin }) => (
  <Row className="my-3 mx-4">
    <Col xs={12} sm={3}>
      <Image src={src} alt={name} rounded fluid />
    </Col>
    <Col sm={9} className="d-none d-sm-block">
      <h3 className="mt-3 mb-1">{name}</h3>
      <p>
        {roles.join(' | ')}
      </p>
      <hr />
      <p>
        {`Graduated ${dateGraduated.format('YYYY')}, ${major}`}
      </p>
      <p>
        {`Employed at ${company}`}
      </p>
      <p>
        <FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} />
        {` @${slack} `}
        <br />
        <a className="social-button mr-2" href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
          {' '}
LinkedIn
        </a>
      </p>
    </Col>
    <Col xs={12} className="d-block d-sm-none">
      <p className="text-center mt-3 mb-1">{name}</p>
      <p className="text-center">
        {roles.join(' | ')}
      </p>
      <p className="text-center">
        Graduated
        {' '}
        {dateGraduated.format('YYYY')}
,
        {' '}
        {major}
      </p>
      <p className="text-center">
        Employed at
        {' '}
        {company}
      </p>
      <p className="text-center">
        <FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} />
        {' '}
@
        {slack}
        {' '}
        <br />
        <a className="social-button mr-2" href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
          {' '}
LinkedIn
        </a>
      </p>
    </Col>
  </Row>
);

alumni.propTypes = {
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
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateGraduated: PropTypes.instanceOf(moment).isRequired,
  major: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  slack: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default alumni;
