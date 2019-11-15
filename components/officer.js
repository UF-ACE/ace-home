import { Image, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const officer = (props) => (
<Col xs={12} sm={10} md={3} className="mx-4">
	<h3 className="text-center mt-3">{props.title}</h3>
	<Image src={props.src} alt={props.title} rounded fluid />
	<p className="text-center mt-3 mb-1">{props.name}</p>
	<p className="text-center">
		{props.email ? <a className="social-button mr-2" href={`mailto:${props.email}`}><FontAwesomeIcon icon={faEnvelope} fixedWidth /> Email</a> : null}
		<FontAwesomeIcon className="ml-1 mr-0" icon={faSlack} /> @{props.slack} 
	</p>
</Col>
)

export default officer