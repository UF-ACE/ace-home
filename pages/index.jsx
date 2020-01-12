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
import Officer from '../components/officer'
import Alumni from '../components/alumni'
import Event from '../components/event'

import BOARD_DATA from '../components/config/board'
import ALUMNI_DATA from '../components/config/alumni'
import EVENT_DATA from '../components/config/event'

import ScrollableAnchor from 'react-scrollable-anchor'

import { faSlack, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const moment = require('moment')

function Home() {
  const boardCards = BOARD_DATA.map((officer, key) => (
    <Officer 
      title={officer.title}
      name={officer.name}
      email={officer.email}
      slack={officer.slack}
      key={key}
      src={require(`../public/board/${officer.src}?resize&sizes[]=300&sizes[]=600`)}
    />
  ))

  const today = moment()

  const SORTED_ALUMNI = ALUMNI_DATA.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

  const alumniCards = SORTED_ALUMNI.map((alumni, key) => 
    {
      let dateGrad = moment(alumni.dateGraduated)
      if (today.isBefore(dateGrad)) {
        return null
      }
      return (
        <Alumni 
          name={alumni.name}
          slack={alumni.slack}
          company={alumni.company}
          major={alumni.major}
          dateGraduated={dateGrad}
          linkedin={alumni.linkedin}
          roles={alumni.roles}
          key={key}
          src={require(`../public/alumni/${alumni.src}?resize&sizes[]=300&sizes[]=600`)}
        />
      )
    }
  )

    const eventCards = EVENT_DATA.map((event, key) =>{
      return (
        <Event
          key={key}
          name={event.summary}
          description={event.description}
          datetime={event.datetime}
          location={event.location}
        />
      )
    });



  return (
    <Container fluid>
      <Nav />
      <ScrollableAnchor id={'home'}>
        <Container className="banner text-center" fluid>
          <Image src={require('../public/banner.jpg')} alt="Banner ACE @ UF" fluid />
          <div className="over-img">
            <h1 className="display-1 d-none d-sm-block">ACE @ UF</h1>
          </div>
        </Container>
      </ScrollableAnchor>
      <ScrollableAnchor id={'about'}>
        <Jumbotron className="mt-0">
          <Container>
            <h2>About</h2>
            <hr />
            <p>Most of the computer-related clubs at the University of Florida were polarized to represent either electrical engineering or computer science . Students in computer engineering and other computer-related fields wanted a club that represented the union of electrical engineering and computer science. In the fall semester of 2014, their ideas would become reality through the official foundation of the University of Florida Association of Computer Engineers.</p>
          </Container>
        </Jumbotron>
      </ScrollableAnchor>
      <ScrollableAnchor id={'schedule'}>
        <Jumbotron style={{ marginTop: 0 }}>
          <Container>
            <h2>Upcoming Events</h2>
            <hr />
            <Row className="justify-content-center">
              {eventCards}
            </Row>
          </Container>
        </Jumbotron>
      </ScrollableAnchor>
      <Container>
        <Row>
          <Col xs={{span: 6, offset: 3}}>
            <h2 className="text-center">Thank you to our Sponsors!</h2>
            <hr />
            <Image className="img-fluid" alt="Sponsor: JP Morgan and Chase Co" src={require('../public/sponsors/jpmc.jpg?resize')} />
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
      <Container>
        <Row>
          <Col xs={{span: 6, offset: 3}}>
            <h2 className="text-center">Our 2019 Officers</h2>
            <hr />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {boardCards}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={{span: 6, offset: 3}}>
            <h2 className="text-center">Our Alumni</h2>
            <hr />
          </Col>
        </Row>
        {alumniCards}
      </Container>
    </Container>
  )
}

export default Home

