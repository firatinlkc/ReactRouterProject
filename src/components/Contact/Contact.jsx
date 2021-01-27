import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function About(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card className="p-5">
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter note" />
              </Form.Group>
              <Button variant="primary btn-block btn-dark mt-4" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
