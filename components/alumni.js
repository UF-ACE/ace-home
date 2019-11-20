import { Image, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

const alumni = (props) => (
<Row className="my-3 mx-4">
	<Col xs={12} sm={3}>
		<Image src={props.src} alt={props.name} rounded fluid />
	</Col>
	<Col sm={9} className="d-none d-sm-block">
		<h3 className="mt-3 mb-1">{props.name}</h3>
		<p>
			{props.roles.join(' | ')}
		</p>
		<hr />
		<p>
			Graduated {props.dateGraduated.format("YYYY")}, {props.major}
		</p>
		<p>
			Employed at {props.company}
		</p>
		<p>
			<FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} /> @{props.slack} <br />
			<a className="social-button mr-2" href={props.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} fixedWidth /> LinkedIn</a>
		</p>
	</Col>
	<Col xs={12} className="d-block d-sm-none">
		<p className="text-center mt-3 mb-1">{props.name}</p>
		<p className="text-center">
			{props.roles.join(' | ')}
		</p>
		<p className="text-center">
			Graduated {props.dateGraduated.format("YYYY")}, {props.major}
		</p>
		<p className="text-center">
			Employed at {props.company}
		</p>
		<p className="text-center">
			<FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} /> @{props.slack} <br />
			<a className="social-button mr-2" href={props.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} fixedWidth /> LinkedIn</a>
		</p>
	</Col>
</Row>
)

export default alumni