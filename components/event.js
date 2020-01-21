import {
  Col, Row, Card, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';

const event = (props) => (
  <Col xs={12} sm={3} md={4} className="mt-3">
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <FontAwesomeIcon className="mr-1" icon={faClock} fixedWidth />
        {props.datetime}
        <FontAwesomeIcon className="ml-3 mr-1" icon={faMapPin} />
        {props.location}
      </Card.Body>
    </Card>
  </Col>
);

export default event;
