import React from "react";
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import cardPhoto from '../../images/beachVibes.jpg'
import TestService from '../../_services/test-services';
import './LocalGuides.css';

class LocalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: []
    }
    this.TestService = new TestService();
  }

  componentDidMount() {
    this.TestService.getTestData()
      .then(data => {
        this.setState({ testData: data });
      })
  }

  displayTestData = () => {
    const { testData } = this.state;
    if (!testData ) return;
    return testData.map((site) => {
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
      <Container className='local-guides'>
        <Row>
          <CardDeck>{this.displayTestData()}</CardDeck>
        </Row>
      </Container>
    );
  }
}

export default LocalGuide;
