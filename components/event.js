import { Col, Row, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons'

const event = (props) => (
        <Row className="my-3 mx-4">
            <Col xs={12} sm={3}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                         {props.description}
                        </Card.Text>

                       
                            {<FontAwesomeIcon className="mr-1" icon={faClock} fixedWidth />}{props.datetime}  
		                    <FontAwesomeIcon className="ml-3 mr-1" icon={faMapPin} />{props.location} 
	                 
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
            </Col>
       </Row>
    )
    
    export default event