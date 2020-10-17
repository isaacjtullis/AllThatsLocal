import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import TestService from '../../_services/test-services';
import { CreateGuideForm } from './Form';
import './LocalGuides.css';

class CreateGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      name: '',
      description: ''
    }
  }

  toggleForm = () => {
    const { displayForm } = this.state;
    this.setState({ displayForm: !displayForm });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (event) => {
    console.log('event:', event.target.value, event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, description, displayForm } = this.state;
    return(
      <div>
        <Container className='create-guide'>
          <Row>
            <Col className='text-center' md={12}>
              <Button className='my-auto' onClick={() => this.toggleForm()}>Create Guide</Button>
            </Col>
          </Row>
          </Container>
        {displayForm &&
          <CreateGuideForm
            name={name}
            description={description}
            handleSubmit={(e)=>this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
          />
        }
      </div>
    );
  }
}

export default CreateGuide;
