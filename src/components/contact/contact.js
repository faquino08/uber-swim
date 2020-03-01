import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./contact.css"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const homeContact = () => (
  <Container className="home_contact">
    <Form>
      <Row>
        <Col md={6} xs={12}>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="(XXX)-XXX-XXXX" />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" />
        </Col>
        <Col md={6} xs={12}>
          <Form.Label>Interested In</Form.Label>
          <Form.Control as="select">
            <option>One-on-One Classes</option>
            <option>Small Group Classes</option>
          </Form.Control>
        </Col>
      </Row>

      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
)

export default homeContact;