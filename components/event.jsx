import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const event = ({ name, description, datetime, location }) => (
  <Col xs={12} sm={3} md={4} className="mt-3">
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <FontAwesomeIcon className="mr-1" icon={faClock} fixedWidth />
        {moment(datetime).format('ddd. MMMM Do, h:mma')}
        <br />
        <FontAwesomeIcon className="ml-1 mr-1" icon={faMapPin} />
        {location}
      </Card.Body>
    </Card>
  </Col>
);

event.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default event;
