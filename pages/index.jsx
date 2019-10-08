import '../styles.scss'
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron
} from 'react-bootstrap'

import Nav from '../components/nav'
import SocialButton from '../components/social-button'

import ScrollableAnchor from 'react-scrollable-anchor'

import { faSlack, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <Container fluid>
      <Nav />
      <ScrollableAnchor id={'home'}>
        <Container className="banner text-center" fluid>
          <Image src={require('../public/banner.jpg')} fluid />
          <div className="over-img">
            <h1 className="display-1">ACE @ UF</h1>
          </div>
        </Container>
      </ScrollableAnchor>
      <ScrollableAnchor id={'about'}>
        <Jumbotron style={{ marginTop: 0 }}>
          <Container>
            <h2>About</h2>
            <hr />
            <p>Most of the computer-related clubs at the University of Florida were polarized to represent either electrical engineering or computer science . Students in computer engineering and other computer-related fields wanted a club that represented the union of electrical engineering and computer science. In the fall semester of 2014, their ideas would become reality through the official foundation of the University of Florida Association of Computer Engineers.</p>
          </Container>
        </Jumbotron>
      </ScrollableAnchor>
      <Container>
        <Row>
          <Col xs={{span: 6, offset: 3}}>
            <h2 className="text-center">Thank you to our Sponsors!</h2>
            <hr />
            <Image src={require('../public/sponsors/jpmc.jpg')} />
          </Col>
        </Row>
      </Container>
      <ScrollableAnchor id={'connect'}>
        <Jumbotron>
          <Container>
            <h2>Connect with Us</h2>
            <hr />
            <Row>
              <SocialButton link="https://uf-ace.slack.com/" icon={faSlack} title="Slack" />
              <SocialButton link="https://www.facebook.com/groups/gatorace/?ref=bookmarks" icon={faFacebook} title="Facebook" />
              <SocialButton link="https://twitter.com/ace_uf?lang=en" icon={faTwitter} title="Twitter" />
              <SocialButton link="https://www.instagram.com/ace_uf" icon={faInstagram} title="Instagram" />
            </Row>
          </Container>
        </Jumbotron>
      </ScrollableAnchor>
    </Container>
  )
}

export default Home

