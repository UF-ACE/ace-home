import '../styles.scss'
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron
} from 'react-bootstrap'

import Nav from '../components/nav'

import ScrollableAnchor from 'react-scrollable-anchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSlack, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <Container fluid>
      <Nav />
      <ScrollableAnchor id={'home'}>
        <Container className="banner text-center" fluid>
          <Image src={require('../assets/banner.jpg')} fluid />
          <div className="over-img">
            <h1 className="display-3">ACE @ UF</h1>
          </div>
        </Container>
      </ScrollableAnchor>
      <ScrollableAnchor id={'about'}>
        <Jumbotron>
          <Container>
            <h2>About</h2>
            <hr />
            <p>Most of the computer-related clubs at the University of Florida were polarized to represent either electrical engineering or computer science . Students in computer engineering and other computer-related fields wanted a club that represented the union of electrical engineering and computer science. In the fall semester of 2014, their ideas would become reality through the official foundation of the University of Florida Association of Computer Engineers.</p>
          </Container>
        </Jumbotron>
      </ScrollableAnchor>
      <Container>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home

