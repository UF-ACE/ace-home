import '../styles.scss'
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import Nav from '../components/nav'

function Home() {
  return (
    <Container fluid>
      <Nav />
      <Container className="banner text-center" fluid>
        <Image src={require('../assets/banner.jpg')} fluid />
        <div className="over-img">
          <h1 className="display-4">ACE @ UF</h1>
        </div>
      </Container>
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

