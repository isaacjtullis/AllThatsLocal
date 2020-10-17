import React from "react";
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import cardPhoto from '../../images/beachVibes.jpg'
import TestService from '../../_services/test-services';
import CreateGuide from './CreateGuide';
import './LocalGuides.css';

class LocalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localGuides: []
    }
    this.TestService = new TestService();
  }

  componentDidMount() {
    this.TestService.getTestData()
      .then(data => {
        this.setState({ localGuides: data });
      })
  }

  updateGuides = (guide) => {
    console.log('guide:', guide);
    this.setState({ localGuides: [...this.state.localGuides, guide] })
  }

  displayGuides = () => {
    const { localGuides } = this.state;
    if (!localGuides.length === 0 ) return;
    return localGuides.map((site) => {
      return (
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={cardPhoto} />
            <Card.Body>
              <Card.Title>{`${site.name}`}</Card.Title>
              <Card.Text>{`${site.description}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return(
      <div>
        <Container className='local-guides'>
          <Row>
            <CardDeck>{this.displayGuides()}</CardDeck>
          </Row>
        </Container>
        <CreateGuide updateGuides={(data) => this.updateGuides(data)}/>
      </div>
    );
  }
}

export default LocalGuide;
