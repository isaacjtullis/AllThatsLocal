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
      description: '',
      validated: false
    }
    this.TestService = new TestService();
  }

  toggleForm = () => {
    const { displayForm } = this.state;
    this.setState({ displayForm: !displayForm });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { displayForm } = this.state;
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const data = {}
      data.name = this.state.name;
      data.description = this.state.description;
      this.TestService.createGuide(data).then(response => {
        this.props.updateGuides(response);
        this.setState({ name: '', description: '', displayForm: !displayForm });
      })
    }
    this.setState({ validated: true });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, description, validated, displayForm } = this.state;
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
            validated={validated}
            handleSubmit={(e)=>this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
          />
        }
      </div>
    );
  }
}

export default CreateGuide;
