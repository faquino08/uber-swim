import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./short_class.module.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import teaswh2 from "../../../images/teachingswiming (50).jpg"
import teaswh3 from "../../../images/teachingswiming (89).jpg"
import { Link } from "gatsby"

const quickClasses = () => (
  <Container className={styles.home_classes}>
    <Row>
      <Col md={4} xs={12}>
        <img src={teaswh2}></img>
      </Col>
      <Col md={4} xs={12}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.short_btn}>
          <Button variant="outline-primary">
            <Link to="/">Classes</Link>
          </Button>
        </div>
      </Col>
      <Col md={4} xs={12}>
        <img src={teaswh3}></img>
      </Col>
    </Row>
  </Container>
)

export default quickClasses