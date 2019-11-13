import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialButton = (props) => (
  <Col xs={12} sm={6} md={3} className="mt-4 social-button">
    <a className="social-button" href={props.link} target="_blank">
      <FontAwesomeIcon style={{width: "100%"}} icon={props.icon} size="6x" />
      <h3 className="text-center mt-3">{props.title}</h3>
    </a>
  </Col>
)

export default socialButton