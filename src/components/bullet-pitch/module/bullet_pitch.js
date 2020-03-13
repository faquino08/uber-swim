import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./bullet_pitch.module.css"

const bulletPitch = () => (
  <Container className={styles.bullets}>
    <Row className={styles.row}>
      <h1>
        WE <font color="#cd1e26">ARE:</font>
      </h1>
    </Row>
    <Row className={styles.row}>
      <Col xs={12} md={4} className={[styles["bt_1"], styles.col]}>
        <div className={styles.bullet_pt}>
          <i
            className="fas fa-user-friends fa-3x"
            style={{ color: "white" }}
          ></i>
          <p>Family owned and operated.</p>
        </div>
      </Col>
      <Col xs={12} md={4} className={[styles["bt_2"], styles.col]}>
        <div className={styles.bullet_pt}>
          <i className="fas fa-users fa-3x" style={{ color: "white" }}></i>{" "}
          <p>Committed to keeping class sizes small.</p>
        </div>
      </Col>
      <Col xs={12} md={4} className={[styles["bt_3"], styles.col]}>
        <div className={styles.bullet_pt}>
          <i class="fas fa-swimmer fa-3x" style={{ color: "white" }}></i>
          <p>Dedicated to your progress and growth.</p>
        </div>
      </Col>
    </Row>
  </Container>
)

export default bulletPitch