import React from "react";
import { CardDeck, Card, Button } from 'react-bootstrap';
import cardPhoto from './images/beachVibes.jpg'
class LocalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/testAPI/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ testData: data });
      })
  }

  displayTestData = () => {
    const { testData } = this.state;
    if (!testData ) return;
    return testData.map((site) => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPhoto} />
          <Card.Body>
            <Card.Title>{`${site.name}`}</Card.Title>
            <Card.Text>{`${site.description}`}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    });
  }

  render() {
    return(
      <CardDeck>{this.displayTestData()}</CardDeck>
    );
  }
}

export default LocalGuide;
