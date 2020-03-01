import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import "./bullet_pitch.css"

const bulletPitch = () => (
  <Container className="bullets">
    <Row>
      <h1>
        WE <font color="#cd1e26">ARE:</font>
      </h1>
    </Row>
    <Row>
      <Col xs={12} md={4} className="bt_1">
        <div className="bullet_pt bt_1">
          <i class="fas fa-user-friends fa-3x" style={{ color: "white" }}></i>
          <p>Family owned and operated.</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="bt_2">
        <div className="bullet_pt">
          <i class="fas fa-users fa-3x" style={{ color: "white" }}></i>{" "}
          <p>Committed to keeping class sizes small.</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="bt_3">
        <div className="bullet_pt">
          <i class="fas fa-swimmer fa-3x" style={{ color: "white" }}></i>
          <p>Dedicated to your progress and growth.</p>
        </div>
      </Col>
    </Row>
  </Container>
)

export default bulletPitch;