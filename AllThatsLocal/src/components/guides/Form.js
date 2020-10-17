import React from "react";
import { Container, Form, Button } from 'react-bootstrap';

export const CreateGuideForm = (props) => (
  <Container>
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control value={props.name} onChange={props.handleChange} name="name" placeholder="Enter name of location" />
      </Form.Group>

      <Form.Group controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control value={props.description} onChange={props.handleChange} name="description" placeholder="Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
)
