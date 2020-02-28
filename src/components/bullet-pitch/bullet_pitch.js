import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import "./bullet_pitch.css"

const bulletPitch = () => (
  <Container className="bullets">
    <Row>
      <Col xs={12} md={4}>
        <div className="bullet_pt">
            <i class="fas fa-user-friends fa-3x" style={{ color: "white" }}></i>
        </div>
      </Col>
      <div className="bl_divider"></div>
      <Col xs={12} md={4}>
        <div className="bullet_pt">
            <i class="fas fa-users fa-3x" style={{ color: "white" }}></i>
        </div>
      </Col>
      <div className="bl_divider"></div>
      <Col xs={12} md={4}>
        <div className="bullet_pt">
            <i class="fas fa-swimmer fa-3x" style={{ color: "white" }}></i>
        </div>
      </Col>
    </Row>
  </Container>
)

export default bulletPitch;